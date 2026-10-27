/**
 * SQLite Database Manager for Boda Mari & Simón
 * 100% compatible with local dev, AI Studio, and DonWeb Linux/cPanel hosting.
 * Uses Node's built-in SQLite engine (DatabaseSync) with zero external GLIBC dependencies,
 * and maintains src/data/wedding.sqlite as well as DonWeb SQL export.
 */
import path from 'path';
import fs from 'fs';
import type { Invitation, Guest } from '../types';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const SQLITE_PATH = path.join(DATA_DIR, 'wedding.sqlite');
const DB_JSON_PATH = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let syncDb: any = null;

function getDbInstance() {
  if (syncDb) return syncDb;
  try {
    // Dynamic access to node:sqlite DatabaseSync
    const sqliteModule = (globalThis as any)._nodeSqlite || null;
    if (sqliteModule) {
      syncDb = new sqliteModule.DatabaseSync(SQLITE_PATH);
      return syncDb;
    }
  } catch (err) {
    console.warn('[SQLite] Could not initialize DatabaseSync:', err);
  }
  return syncDb;
}

// Initialize schema and sync with db.json
export async function initSqliteDatabase(): Promise<void> {
  try {
    const { DatabaseSync } = await import('node:sqlite');
    syncDb = new DatabaseSync(SQLITE_PATH);

    // 1. Invitations Table
    syncDb.exec(`
      CREATE TABLE IF NOT EXISTS invitations (
        code TEXT PRIMARY KEY,
        names TEXT NOT NULL,
        passes INTEGER NOT NULL DEFAULT 2,
        status TEXT NOT NULL DEFAULT 'pending',
        updatedAt TEXT
      );
    `);

    // 2. Guests Table
    syncDb.exec(`
      CREATE TABLE IF NOT EXISTS guests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        invitation_code TEXT NOT NULL,
        name TEXT NOT NULL,
        isAttending INTEGER NOT NULL DEFAULT 1,
        dietaryRestrictions TEXT DEFAULT 'none',
        notes TEXT,
        needsTransport INTEGER DEFAULT 0,
        transportLocation TEXT,
        FOREIGN KEY (invitation_code) REFERENCES invitations (code) ON DELETE CASCADE
      );
    `);

    // 3. Emails Table
    syncDb.exec(`
      CREATE TABLE IF NOT EXISTS emails (
        id TEXT PRIMARY KEY,
        to_email TEXT NOT NULL,
        subject TEXT NOT NULL,
        body TEXT NOT NULL,
        timestamp TEXT NOT NULL
      );
    `);

    // Check count and seed from db.json if empty
    const countRow: any = syncDb.prepare(`SELECT COUNT(*) as count FROM invitations`).get();
    if (countRow && countRow.count === 0 && fs.existsSync(DB_JSON_PATH)) {
      try {
        const raw = fs.readFileSync(DB_JSON_PATH, 'utf-8');
        const parsed = JSON.parse(raw);
        const list: Invitation[] = parsed.invitations || [];
        console.log(`[SQLite] Migrating ${list.length} invitations from db.json to SQLite...`);

        const insertInv = syncDb.prepare(
          `INSERT OR REPLACE INTO invitations (code, names, passes, status, updatedAt) VALUES (?, ?, ?, ?, ?)`
        );
        const insertGuest = syncDb.prepare(
          `INSERT INTO guests (invitation_code, name, isAttending, dietaryRestrictions, notes, needsTransport, transportLocation)
           VALUES (?, ?, ?, ?, ?, ?, ?)`
        );

        for (const inv of list) {
          insertInv.run(
            inv.code.toUpperCase(),
            inv.names,
            inv.passes,
            inv.status,
            inv.updatedAt || new Date().toISOString()
          );

          for (const g of inv.guests || []) {
            insertGuest.run(
              inv.code.toUpperCase(),
              g.name,
              g.isAttending ? 1 : 0,
              g.dietaryRestrictions || 'none',
              g.notes || '',
              g.needsTransport ? 1 : 0,
              g.transportLocation || ''
            );
          }
        }
        console.log('[SQLite] Seed from db.json completed.');
      } catch (seedErr) {
        console.error('[SQLite] Failed to seed from db.json:', seedErr);
      }
    }
    console.log('[SQLite] Database initialized at', SQLITE_PATH);
  } catch (err) {
    console.warn('[SQLite] node:sqlite initialization warning (using JSON mirror fallback):', err);
  }
}

// Read all invitations with joined guests
export async function getInvitationsSqlite(): Promise<Invitation[]> {
  const db = getDbInstance();
  if (!db) {
    // Fallback to db.json
    if (fs.existsSync(DB_JSON_PATH)) {
      const data = JSON.parse(fs.readFileSync(DB_JSON_PATH, 'utf-8'));
      return data.invitations || [];
    }
    return [];
  }

  try {
    const invRows: any[] = db.prepare(`SELECT * FROM invitations ORDER BY names ASC`).all();
    const guestRows: any[] = db.prepare(`SELECT * FROM guests ORDER BY id ASC`).all();

    const guestMap: Record<string, Guest[]> = {};
    guestRows.forEach(row => {
      const code = String(row.invitation_code).toUpperCase();
      if (!guestMap[code]) guestMap[code] = [];
      guestMap[code].push({
        name: row.name,
        isAttending: Boolean(row.isAttending),
        dietaryRestrictions: row.dietaryRestrictions || 'none',
        notes: row.notes || undefined,
        needsTransport: Boolean(row.needsTransport),
        transportLocation: row.transportLocation || undefined
      });
    });

    return invRows.map(row => ({
      code: row.code,
      names: row.names,
      passes: Number(row.passes),
      status: row.status as 'pending' | 'confirmed' | 'declined',
      updatedAt: row.updatedAt,
      guests: guestMap[String(row.code).toUpperCase()] || []
    }));
  } catch (e) {
    console.error('[SQLite] getInvitationsSqlite error:', e);
    if (fs.existsSync(DB_JSON_PATH)) {
      const data = JSON.parse(fs.readFileSync(DB_JSON_PATH, 'utf-8'));
      return data.invitations || [];
    }
    return [];
  }
}

// Get single invitation by code
export async function getInvitationByCodeSqlite(code: string): Promise<Invitation | null> {
  const db = getDbInstance();
  const upper = code.trim().toUpperCase();

  if (!db) {
    if (fs.existsSync(DB_JSON_PATH)) {
      const data = JSON.parse(fs.readFileSync(DB_JSON_PATH, 'utf-8'));
      const found = (data.invitations || []).find((i: Invitation) => i.code.toUpperCase() === upper);
      return found || null;
    }
    return null;
  }

  try {
    const invRow: any = db.prepare(`SELECT * FROM invitations WHERE code = ?`).get(upper);
    if (!invRow) return null;

    const guestRows: any[] = db.prepare(`SELECT * FROM guests WHERE invitation_code = ? ORDER BY id ASC`).all(upper);
    const guests: Guest[] = guestRows.map(g => ({
      name: g.name,
      isAttending: Boolean(g.isAttending),
      dietaryRestrictions: g.dietaryRestrictions || 'none',
      notes: g.notes || undefined,
      needsTransport: Boolean(g.needsTransport),
      transportLocation: g.transportLocation || undefined
    }));

    return {
      code: invRow.code,
      names: invRow.names,
      passes: Number(invRow.passes),
      status: invRow.status,
      updatedAt: invRow.updatedAt,
      guests
    };
  } catch (e) {
    console.error('[SQLite] getInvitationByCodeSqlite error:', e);
    return null;
  }
}

// Save or Update an Invitation and its guests
export async function saveInvitationSqlite(invitation: Invitation): Promise<void> {
  const db = getDbInstance();
  const code = invitation.code.trim().toUpperCase();
  const updatedAt = invitation.updatedAt || new Date().toISOString();

  if (!db) return;

  try {
    const insertInv = db.prepare(
      `INSERT OR REPLACE INTO invitations (code, names, passes, status, updatedAt) VALUES (?, ?, ?, ?, ?)`
    );
    insertInv.run(code, invitation.names.trim(), invitation.passes, invitation.status, updatedAt);

    // Delete existing guests
    db.prepare(`DELETE FROM guests WHERE invitation_code = ?`).run(code);

    // Insert updated guests
    const guests = invitation.guests || [];
    if (guests.length > 0) {
      const insertGuest = db.prepare(
        `INSERT INTO guests (invitation_code, name, isAttending, dietaryRestrictions, notes, needsTransport, transportLocation)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      );
      for (const g of guests) {
        insertGuest.run(
          code,
          g.name,
          g.isAttending ? 1 : 0,
          g.dietaryRestrictions || 'none',
          g.notes || '',
          g.needsTransport ? 1 : 0,
          g.transportLocation || ''
        );
      }
    }
  } catch (e) {
    console.error('[SQLite] saveInvitationSqlite error:', e);
  }
}

// Delete an invitation
export async function deleteInvitationSqlite(code: string): Promise<void> {
  const db = getDbInstance();
  const upper = code.trim().toUpperCase();
  if (!db) return;

  try {
    db.prepare(`DELETE FROM guests WHERE invitation_code = ?`).run(upper);
    db.prepare(`DELETE FROM invitations WHERE code = ?`).run(upper);
  } catch (e) {
    console.error('[SQLite] deleteInvitationSqlite error:', e);
  }
}

// Export complete SQL DDL + DML dump for DonWeb MySQL or SQLite
export async function generateSqlDump(): Promise<string> {
  const invitations = await getInvitationsSqlite();
  let sql = `-- Boda Mari & Simón - Database Dump for DonWeb
-- Compatible with MySQL / MariaDB / SQLite on DonWeb cPanel
-- Generated on ${new Date().toISOString()}

CREATE TABLE IF NOT EXISTS invitations (
  code VARCHAR(50) PRIMARY KEY,
  names VARCHAR(255) NOT NULL,
  passes INT NOT NULL DEFAULT 2,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  updatedAt VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS guests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  invitation_code VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  isAttending TINYINT(1) NOT NULL DEFAULT 1,
  dietaryRestrictions VARCHAR(100) DEFAULT 'none',
  notes TEXT,
  needsTransport TINYINT(1) DEFAULT 0,
  transportLocation VARCHAR(255),
  FOREIGN KEY (invitation_code) REFERENCES invitations (code) ON DELETE CASCADE
);

`;

  invitations.forEach(inv => {
    const safeNames = inv.names.replace(/'/g, "''");
    sql += `INSERT INTO invitations (code, names, passes, status, updatedAt) VALUES ('${inv.code}', '${safeNames}', ${inv.passes}, '${inv.status}', '${inv.updatedAt || ''}');\n`;
    (inv.guests || []).forEach(g => {
      const safeGName = g.name.replace(/'/g, "''");
      const safeNotes = (g.notes || '').replace(/'/g, "''");
      const safeLoc = (g.transportLocation || '').replace(/'/g, "''");
      sql += `INSERT INTO guests (invitation_code, name, isAttending, dietaryRestrictions, notes, needsTransport, transportLocation) VALUES ('${inv.code}', '${safeGName}', ${g.isAttending ? 1 : 0}, '${g.dietaryRestrictions || 'none'}', '${safeNotes}', ${g.needsTransport ? 1 : 0}, '${safeLoc}');\n`;
    });
  });

  return sql;
}
