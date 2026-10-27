import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import {
  initSqliteDatabase,
  getInvitationsSqlite,
  getInvitationByCodeSqlite,
  saveInvitationSqlite,
  deleteInvitationSqlite,
  generateSqlDump
} from "./src/db/sqlite";

interface Guest {
  name: string;
  isAttending: boolean;
  dietaryRestrictions: string;
  notes?: string;
  needsTransport?: boolean;
  transportLocation?: string;
}

interface Invitation {
  code: string;
  names: string;
  passes: number;
  status: 'pending' | 'confirmed' | 'declined';
  updatedAt?: string;
  guests: Guest[];
}

interface SimulatedEmail {
  id: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

const DB_PATH = path.join(process.cwd(), "src", "data", "db.json");
const SQLITE_FILE = path.join(process.cwd(), "src", "data", "wedding.sqlite");
const EMAILS_PATH = path.join(process.cwd(), "src", "data", "emails.json");

// Helper to ensure database files exist
function ensureDb() {
  const dataDir = path.join(process.cwd(), "src", "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(DB_PATH)) {
    const defaultData = {
      invitations: [
        {
          code: "MARISIMON",
          names: "Mariángel & Simón",
          passes: 2,
          status: "pending",
          guests: [
            { name: "Mariángel", isAttending: true, dietaryRestrictions: "none" },
            { name: "Simón", isAttending: true, dietaryRestrictions: "none" }
          ]
        },
        {
          code: "MAALWINES",
          names: "Santi & Maite",
          passes: 2,
          status: "pending",
          guests: [
            { name: "Santi", isAttending: true, dietaryRestrictions: "none" },
            { name: "Maite", isAttending: true, dietaryRestrictions: "vegetarian" }
          ]
        }
      ]
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultData, null, 2), "utf8");
  }

  if (!fs.existsSync(EMAILS_PATH)) {
    fs.writeFileSync(EMAILS_PATH, JSON.stringify([], null, 2), "utf8");
  }
}

function readInvitations(): Invitation[] {
  ensureDb();
  try {
    const data = fs.readFileSync(DB_PATH, "utf8");
    return JSON.parse(data).invitations || [];
  } catch (err) {
    console.error("Error reading db.json", err);
    return [];
  }
}

function writeInvitations(invitations: Invitation[]) {
  ensureDb();
  fs.writeFileSync(DB_PATH, JSON.stringify({ invitations }, null, 2), "utf8");
}

function readEmails(): SimulatedEmail[] {
  ensureDb();
  try {
    const data = fs.readFileSync(EMAILS_PATH, "utf8");
    return JSON.parse(data) || [];
  } catch {
    return [];
  }
}

function writeEmail(email: SimulatedEmail) {
  const emails = readEmails();
  emails.unshift(email); // newest first
  fs.writeFileSync(EMAILS_PATH, JSON.stringify(emails, null, 2), "utf8");
}

async function startServer() {
  ensureDb();
  await initSqliteDatabase().catch(err => console.error("SQLite init error:", err));

  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API: Get all RSVPs (Admin Panel)
  app.get("/api/admin/rsvps", async (req, res) => {
    try {
      const sqliteInvs = await getInvitationsSqlite();
      if (sqliteInvs && sqliteInvs.length > 0) {
        return res.json(sqliteInvs);
      }
    } catch (e) {
      console.warn("Falling back to json db", e);
    }
    const invitations = readInvitations();
    res.json(invitations);
  });

  // API: Validate Code
  app.get("/api/rsvp/:code", async (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    try {
      const sqliteInv = await getInvitationByCodeSqlite(code);
      if (sqliteInv) {
        return res.json({ success: true, invitation: sqliteInv });
      }
    } catch (e) {
      console.warn("SQLite query fallback", e);
    }

    const invitations = readInvitations();
    const invitation = invitations.find(i => i.code.toUpperCase() === code);

    if (invitation) {
      res.json({ success: true, invitation });
    } else {
      res.status(404).json({ success: false, error: "El código de invitación no es válido. Por favor, verificá que esté bien escrito." });
    }
  });

  // API: Submit RSVP
  app.post("/api/rsvp/:code", async (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    const { guests, status } = req.body;

    if (!guests || !Array.isArray(guests)) {
      return res.status(400).json({ success: false, error: "Datos de invitados inválidos." });
    }

    let invitation: Invitation | null = null;
    try {
      invitation = await getInvitationByCodeSqlite(code);
    } catch (e) {
      console.warn("SQLite get error", e);
    }

    if (!invitation) {
      const invitations = readInvitations();
      invitation = invitations.find(i => i.code.toUpperCase() === code) || null;
    }

    if (invitation) {
      // Update data
      invitation.guests = guests;
      invitation.status = status;
      invitation.updatedAt = new Date().toISOString();

      // Save to SQLite
      await saveInvitationSqlite(invitation).catch(err => console.error("SQLite save error", err));

      // Also mirror to db.json
      const invitations = readInvitations();
      const index = invitations.findIndex(i => i.code.toUpperCase() === code);
      if (index !== -1) {
        invitations[index] = invitation;
      } else {
        invitations.push(invitation);
      }
      writeInvitations(invitations);

      // Simulate Email Sending
      const attendingCount = guests.filter((g: any) => g.isAttending).length;
      const emailBody = `
        ¡Hola ${invitation.names}!
        
        Hemos recibido tu confirmación de asistencia para la boda de Mari & Simón.
        
        Detalles de tu confirmación:
        Código: ${invitation.code}
        Estado General: ${status === "confirmed" ? "Confirmado 🎉" : "Declinado 😔"}
        Pases reservados / confirmados: ${invitation.passes} / ${attendingCount}
        
        Invitados:
        ${guests.map((g: any, i: number) => `
          ${i + 1}. ${g.name} - ${g.isAttending ? "Asiste ✅" : "No asiste ❌"}
             Restricciones alimentarias: ${g.dietaryRestrictions || "Ninguna"}
             ¿Necesita Traslado?: ${g.needsTransport ? `Sí (Punto: ${g.transportLocation || "No especificado"})` : "No"}
             Notas: ${g.notes || "Ninguna"}
        `).join("")}
        
        ¡Gracias por completar la información! Nos vemos el gran día en Potrerillos, Mendoza.
        
        Con cariño,
        Mari & Simón 💍
      `;

      const simulatedEmail: SimulatedEmail = {
        id: Math.random().toString(36).substr(2, 9),
        to: `invitados_${code.toLowerCase()}@boda-marisimon.com`,
        subject: `Confirmación de RSVP: ${invitation.names} - Boda Mari & Simón`,
        body: emailBody,
        timestamp: new Date().toISOString()
      };

      writeEmail(simulatedEmail);

      res.json({ success: true, invitation });
    } else {
      res.status(404).json({ success: false, error: "Invitación no encontrada." });
    }
  });

  // API: Database status & management for DonWeb
  app.get("/api/admin/db/status", async (req, res) => {
    try {
      const sqliteInvs = await getInvitationsSqlite();
      const sqliteExists = fs.existsSync(SQLITE_FILE);
      const sqliteSize = sqliteExists ? (fs.statSync(SQLITE_FILE).size / 1024).toFixed(1) + " KB" : "0 KB";
      res.json({
        engine: "SQLite 3",
        compatibleWith: ["DonWeb Linux", "cPanel Node.js", "Local / VPS", "Cloud"],
        sqliteFile: SQLITE_FILE,
        sqliteSize,
        totalInvitations: sqliteInvs.length,
        totalGuests: sqliteInvs.reduce((acc, i) => acc + (i.guests?.length || 0), 0)
      });
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  // API: Download SQLite file directly
  app.get("/api/admin/db/download-sqlite", (req, res) => {
    if (fs.existsSync(SQLITE_FILE)) {
      res.download(SQLITE_FILE, "wedding.sqlite");
    } else {
      res.status(404).json({ error: "Archivo SQLite no encontrado." });
    }
  });

  // API: Download SQL Dump (CREATE TABLE + INSERT) for DonWeb
  app.get("/api/admin/db/download-sql", async (req, res) => {
    try {
      const sql = await generateSqlDump();
      res.setHeader("Content-Type", "application/sql");
      res.setHeader("Content-Disposition", 'attachment; filename="boda_donweb_dump.sql"');
      res.send(sql);
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  // API: Get Simulated Emails (for testing / admin preview)
  app.get("/api/admin/emails", (req, res) => {
    res.json(readEmails());
  });

  // API: Clear Email log
  app.delete("/api/admin/emails", (req, res) => {
    fs.writeFileSync(EMAILS_PATH, JSON.stringify([], null, 2), "utf8");
    res.json({ success: true });
  });

  // API: Add/Update invitations (Admin Panel Creator)
  app.post("/api/admin/rsvps", async (req, res) => {
    const { code, names, passes } = req.body;
    if (!code || !names || !passes) {
      return res.status(400).json({ success: false, error: "Faltan datos requeridos (code, names, passes)." });
    }

    const guests: Guest[] = Array.from({ length: parseInt(passes, 10) }, (_, idx) => ({
      name: idx === 0 ? names.split(" & ")[0] : `Acompañante ${idx}`,
      isAttending: true,
      dietaryRestrictions: "none"
    }));

    const newInvitation: Invitation = {
      code: code.trim().toUpperCase(),
      names: names.trim(),
      passes: parseInt(passes, 10),
      status: "pending",
      guests,
      updatedAt: new Date().toISOString()
    };

    // Save to SQLite
    await saveInvitationSqlite(newInvitation).catch(err => console.error("SQLite save error", err));

    // Also mirror to db.json
    const invitations = readInvitations();
    const existingIndex = invitations.findIndex(i => i.code.toUpperCase() === newInvitation.code);
    if (existingIndex !== -1) {
      invitations[existingIndex] = newInvitation;
    } else {
      invitations.push(newInvitation);
    }
    writeInvitations(invitations);

    res.json({ success: true, invitation: newInvitation });
  });

  // API: Edit invitation details directly from Admin
  app.put("/api/admin/rsvps/:code", async (req, res) => {
    const targetCode = req.params.code.toUpperCase();
    const { code, names, passes, status, guests } = req.body;

    const invitations = readInvitations();
    const index = invitations.findIndex(i => i.code.toUpperCase() === targetCode);

    if (index === -1) {
      return res.status(404).json({ success: false, error: "Invitación no encontrada." });
    }

    const updatedCode = (code ? code.trim().toUpperCase() : targetCode);
    
    // Check if new code conflicts with another invitation
    if (updatedCode !== targetCode) {
      const codeExists = invitations.some((inv, idx) => idx !== index && inv.code.toUpperCase() === updatedCode);
      if (codeExists) {
        return res.status(400).json({ success: false, error: `El código ${updatedCode} ya está en uso por otra invitación.` });
      }
    }

    const current = invitations[index];
    const newPasses = passes !== undefined ? parseInt(passes, 10) : current.passes;

    // Adjust guests if passed or adjust length if passes changed
    let updatedGuests: Guest[] = guests || current.guests || [];
    if (updatedGuests.length < newPasses) {
      const diff = newPasses - updatedGuests.length;
      for (let i = 0; i < diff; i++) {
        updatedGuests.push({
          name: `Acompañante ${updatedGuests.length + 1}`,
          isAttending: status === 'declined' ? false : true,
          dietaryRestrictions: 'none'
        });
      }
    } else if (updatedGuests.length > newPasses) {
      updatedGuests = updatedGuests.slice(0, newPasses);
    }

    const updatedInvitation: Invitation = {
      ...current,
      code: updatedCode,
      names: names !== undefined ? names.trim() : current.names,
      passes: newPasses,
      status: status !== undefined ? status : current.status,
      guests: updatedGuests,
      updatedAt: new Date().toISOString()
    };

    // Save to SQLite
    if (updatedCode !== targetCode) {
      await deleteInvitationSqlite(targetCode).catch(() => {});
    }
    await saveInvitationSqlite(updatedInvitation).catch(err => console.error("SQLite save error", err));

    // Save to db.json
    invitations[index] = updatedInvitation;
    writeInvitations(invitations);

    res.json({ success: true, invitation: updatedInvitation });
  });

  // API: Delete invitation
  app.delete("/api/admin/rsvps/:code", async (req, res) => {
    const code = req.params.code.toUpperCase();
    await deleteInvitationSqlite(code).catch(err => console.error("SQLite delete error", err));

    const invitations = readInvitations();
    const filtered = invitations.filter(i => i.code.toUpperCase() !== code);
    writeInvitations(filtered);

    res.json({ success: true });
  });

  // Serve static assets from public folder
  app.use(express.static(path.join(process.cwd(), "public")));

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
