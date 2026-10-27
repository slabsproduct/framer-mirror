/**
 * JSON-only persistence layer for Boda Mari & Simón (framer-mirror integration).
 *
 * This module replaces the SQLite engine (src/db/sqlite.ts) with a pure JSON
 * store, as decided for the framer-mirror deployment:
 *   - Source of truth: src/server/invitations.json  (shared with the legacy Express API)
 *   - Email log:       src/server/emails.json
 *
 * Schema mapping (reference app Invitation -> framer-mirror invitation record):
 *   code                -> code
 *   names               -> guestName
 *   passes              -> maxPasses
 *   status              -> status ('pending' | 'confirmed' | 'declined')
 *   guests[]            -> guests[] (nested, kept verbatim)
 *   updatedAt           -> updatedAt / confirmedAt
 *
 * Legacy records without `guests` are normalized on read so the Admin UI and
 * the per-pass RSVP form always receive a guests array matching `passes`.
 */
import path from 'path';
import fs from 'fs';
import type { Invitation, Guest } from '../types';

const SERVER_DIR = path.resolve(process.cwd(), '..', 'src', 'server');
const INVITATIONS_PATH = path.join(SERVER_DIR, 'invitations.json');
const EMAILS_PATH = path.join(SERVER_DIR, 'emails.json');

export interface SimulatedEmail {
  id: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

// Seed data used ONLY when invitations.json does not exist yet. Mirrors the
// demo dataset of the reference app (BO-boda-para-compartir) so the RSVP pills
// (MARISIMON / MAALWINES / FAMILIA2026 / MILULOVER / INVITADO123) work out of
// the box in a fresh environment. Existing production data is never touched.
const SEED_INVITATIONS: Invitation[] = [
  {
    code: 'MARISIMON',
    names: 'Mariángel & Simón',
    passes: 2,
    status: 'pending',
    guests: [
      { name: 'Mariángel', isAttending: true, dietaryRestrictions: 'none' },
      { name: 'Simón', isAttending: true, dietaryRestrictions: 'none' },
    ],
  },
  {
    code: 'MAALWINES',
    names: 'Santi & Maite',
    passes: 2,
    status: 'pending',
    guests: [
      { name: 'Santi', isAttending: true, dietaryRestrictions: 'none' },
      { name: 'Maite', isAttending: true, dietaryRestrictions: 'vegetarian' },
    ],
  },
  {
    code: 'FAMILIA2026',
    names: 'Familia Pérez',
    passes: 4,
    status: 'pending',
    guests: [
      { name: 'Carlos Pérez', isAttending: true, dietaryRestrictions: 'celiac' },
      { name: 'Ana Pérez', isAttending: true, dietaryRestrictions: 'none' },
      { name: 'Luis Pérez', isAttending: true, dietaryRestrictions: 'none' },
      { name: 'Sofia Pérez', isAttending: true, dietaryRestrictions: 'vegan' },
    ],
  },
  {
    code: 'MILULOVER',
    names: 'Milu & Lover',
    passes: 2,
    status: 'pending',
    guests: [
      { name: 'Milu', isAttending: true, dietaryRestrictions: 'none' },
      { name: 'Lover', isAttending: true, dietaryRestrictions: 'none' },
    ],
  },
  {
    code: 'INVITADO123',
    names: 'Amigo Especial',
    passes: 1,
    status: 'pending',
    guests: [{ name: 'Amigo Especial', isAttending: true, dietaryRestrictions: 'none' }],
  },
];

function seedRecords(): any[] {
  return SEED_INVITATIONS.map((inv) => ({
    id: inv.code.toLowerCase(),
    code: inv.code,
    guestName: inv.names,
    maxPasses: inv.passes,
    status: inv.status,
    notes: '',
    guests: inv.guests,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }));
}

function ensureFiles() {
  if (!fs.existsSync(SERVER_DIR)) fs.mkdirSync(SERVER_DIR, { recursive: true });
  if (!fs.existsSync(INVITATIONS_PATH)) {
    fs.writeFileSync(INVITATIONS_PATH, JSON.stringify(seedRecords(), null, 2), 'utf8');
  }
  if (!fs.existsSync(EMAILS_PATH)) {
    fs.writeFileSync(EMAILS_PATH, JSON.stringify([], null, 2), 'utf8');
  }
}

/** Normalize any record shape (legacy or reference) into an Invitation. */
function normalize(raw: any): Invitation {
  const passes = Number(raw.maxPasses ?? raw.passes ?? 1) || 1;
  const names = (raw.names ?? raw.guestName ?? 'Invitado').toString();
  let status = (raw.status ?? 'pending').toString();
  if (status !== 'confirmed' && status !== 'declined') status = 'pending';

  let guests: Guest[] = Array.isArray(raw.guests) ? raw.guests : [];
  guests = guests.map((g: any) => ({
    name: g?.name ?? '',
    isAttending: g?.isAttending !== false,
    dietaryRestrictions: g?.dietaryRestrictions ?? 'none',
    notes: g?.notes ?? undefined,
    needsTransport: g?.needsTransport ?? undefined,
    transportLocation: g?.transportLocation ?? undefined,
  }));

  // Pad/truncate guests so there is exactly one entry per pass.
  while (guests.length < passes) {
    guests.push({
      name: guests.length === 0 ? names.split(' & ')[0] : `Acompañante ${guests.length + 1}`,
      isAttending: status !== 'declined',
      dietaryRestrictions: 'none',
    });
  }
  if (guests.length > passes) guests = guests.slice(0, passes);

  return {
    code: (raw.code ?? '').toString().trim().toUpperCase(),
    names,
    passes,
    status: status as Invitation['status'],
    updatedAt: raw.updatedAt ?? raw.confirmedAt ?? undefined,
    guests,
  };
}

/** Denormalize back to the on-disk superset format (keeps legacy fields intact). */
function denormalize(inv: Invitation) {
  const extra = inv as any; // __id / __notes / __createdAt carry-over from raw records
  return {
    id: extra.__id ?? inv.code.toLowerCase(),
    code: inv.code,
    guestName: inv.names,
    names: inv.names,
    maxPasses: inv.passes,
    passes: inv.passes,
    notes: extra.__notes ?? '',
    status: inv.status,
    guests: inv.guests,
    createdAt: extra.__createdAt ?? new Date().toISOString(),
    updatedAt: inv.updatedAt ?? null,
    confirmedAt: inv.status !== 'pending' ? (inv.updatedAt ?? new Date().toISOString()) : null,
  };
}

export function readInvitationsRaw(): any[] {
  ensureFiles();
  try {
    const parsed = JSON.parse(fs.readFileSync(INVITATIONS_PATH, 'utf8'));
    return Array.isArray(parsed) ? parsed : parsed.invitations || [];
  } catch (err) {
    console.error('[jsonStore] Error reading invitations.json:', err);
    return [];
  }
}

function writeInvitationsRaw(rows: any[]) {
  ensureFiles();
  fs.writeFileSync(INVITATIONS_PATH, JSON.stringify(rows, null, 2), 'utf8');
}

export async function getInvitationsJson(): Promise<Invitation[]> {
  return readInvitationsRaw().map(normalize);
}

export async function getInvitationByCodeJson(code: string): Promise<Invitation | null> {
  const clean = code.trim().toUpperCase();
  const found = readInvitationsRaw().find((r: any) => (r.code ?? '').trim().toUpperCase() === clean);
  return found ? normalize(found) : null;
}

export async function saveInvitationJson(invitation: Invitation): Promise<void> {
  const rows = readInvitationsRaw();
  const targetCode = invitation.code.trim().toUpperCase();
  const index = rows.findIndex((r: any) => (r.code ?? '').trim().toUpperCase() === targetCode);
  const record = denormalize(invitation);
  if (index !== -1) {
    rows[index] = { ...rows[index], ...record, id: rows[index].id ?? record.id };
  } else {
    rows.unshift(record);
  }
  writeInvitationsRaw(rows);
}

export async function deleteInvitationJson(code: string): Promise<void> {
  const clean = code.trim().toUpperCase();
  const rows = readInvitationsRaw();
  writeInvitationsRaw(rows.filter((r: any) => (r.code ?? '').trim().toUpperCase() !== clean));
}

/** SQL-style dump generated from the JSON store (for the "Base de datos" tab). */
export function generateSqlDumpFromJson(): string {
  const rows = readInvitationsRaw().map(normalize);
  const esc = (v: string) => (v ?? '').toString().replace(/'/g, "''");
  let sql = `-- Dump de la base de datos de la Boda Mari & Simón\n`;
  sql += `-- Generado: ${new Date().toISOString()}\n`;
  sql += `-- Fuente: src/server/invitations.json (JSON store)\n\n`;
  sql += `CREATE TABLE IF NOT EXISTS invitations (\n  code TEXT PRIMARY KEY,\n  names TEXT NOT NULL,\n  passes INTEGER NOT NULL DEFAULT 2,\n  status TEXT NOT NULL DEFAULT 'pending',\n  updatedAt TEXT\n);\n\n`;
  sql += `CREATE TABLE IF NOT EXISTS guests (\n  id INTEGER PRIMARY KEY AUTOINCREMENT,\n  invitation_code TEXT NOT NULL,\n  name TEXT NOT NULL,\n  isAttending INTEGER NOT NULL DEFAULT 1,\n  dietaryRestrictions TEXT DEFAULT 'none',\n  notes TEXT,\n  needsTransport INTEGER DEFAULT 0,\n  transportLocation TEXT\n);\n\n`;
  rows.forEach((inv) => {
    sql += `INSERT INTO invitations (code, names, passes, status, updatedAt) VALUES ('${esc(inv.code)}', '${esc(inv.names)}', ${inv.passes}, '${esc(inv.status)}', '${esc(inv.updatedAt ?? '')}');\n`;
  });
  sql += `\n`;
  let gid = 1;
  rows.forEach((inv) => {
    inv.guests.forEach((g) => {
      sql +=
        `INSERT INTO guests (id, invitation_code, name, isAttending, dietaryRestrictions, notes, needsTransport, transportLocation) ` +
        `VALUES (${gid++}, '${esc(inv.code)}', '${esc(g.name)}', ${g.isAttending ? 1 : 0}, '${esc(g.dietaryRestrictions)}', ` +
        `'${esc(g.notes ?? '')}', ${g.needsTransport ? 1 : 0}, '${esc(g.transportLocation ?? '')}');\n`;
    });
  });
  return sql;
}

// ------------------------- Emails (simulated) -------------------------
export function readEmails(): SimulatedEmail[] {
  ensureFiles();
  try {
    return JSON.parse(fs.readFileSync(EMAILS_PATH, 'utf8')) || [];
  } catch {
    return [];
  }
}

export function writeEmail(email: SimulatedEmail) {
  const emails = readEmails();
  emails.unshift(email); // newest first
  ensureFiles();
  fs.writeFileSync(EMAILS_PATH, JSON.stringify(emails, null, 2), 'utf8');
}

export function clearEmails() {
  ensureFiles();
  fs.writeFileSync(EMAILS_PATH, JSON.stringify([], null, 2), 'utf8');
}
