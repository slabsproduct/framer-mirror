/**
 * Servidor de la app montada (Opción B) — Boda Mari & Simón
 * React/Vite + Express con persistencia 100% JSON (sin SQLite).
 *
 * Fuente de datos compartida: ../src/server/invitations.json y emails.json
 * (ver src/db/jsonStore.ts). Puerto por defecto: 3005 (configurable con PORT).
 */
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import {
  getInvitationsJson,
  getInvitationByCodeJson,
  saveInvitationJson,
  deleteInvitationJson,
  generateSqlDumpFromJson,
  readEmails,
  writeEmail,
  clearEmails,
  readInvitationsRaw,
  type SimulatedEmail,
} from './src/db/jsonStore';
import type { Invitation, Guest } from './src/types';

const PORT = Number(process.env.PORT) || 3005;
const ROOT_DIR = path.resolve(import.meta.dirname || process.cwd());
const INVITATIONS_PATH = path.resolve(ROOT_DIR, '..', 'src', 'server', 'invitations.json');

console.log(`[boda-app:boot] json store -> ${INVITATIONS_PATH}`);

async function startServer() {
  const app = express();
  app.use(express.json());

  // ---------------- API: Admin (Back Office) ----------------
  app.get('/api/admin/rsvps', async (_req, res) => {
    const invitations = await getInvitationsJson();
    res.json(invitations);
  });

  // Crear invitación
  app.post('/api/admin/rsvps', async (req, res) => {
    const { code, names, passes } = req.body;
    if (!code || !names || !passes) {
      return res.status(400).json({ success: false, error: 'Faltan datos requeridos (code, names, passes).' });
    }
    const cleanCode = code.trim().toUpperCase();
    const existing = await getInvitationByCodeJson(cleanCode);
    if (existing) {
      return res.status(400).json({ success: false, error: `El código ${cleanCode} ya está en uso.` });
    }
    const guests: Guest[] = Array.from({ length: parseInt(passes, 10) }, (_, idx) => ({
      name: idx === 0 ? names.split(' & ')[0] : `Acompañante ${idx}`,
      isAttending: true,
      dietaryRestrictions: 'none',
    }));
    const newInvitation: Invitation = {
      code: cleanCode,
      names: names.trim(),
      passes: parseInt(passes, 10),
      status: 'pending',
      guests,
      updatedAt: new Date().toISOString(),
    };
    await saveInvitationJson(newInvitation);
    res.json({ success: true, invitation: newInvitation });
  });

  // Editar invitación (incluye detalle por invitado)
  app.put('/api/admin/rsvps/:code', async (req, res) => {
    const targetCode = req.params.code.toUpperCase();
    const { code, names, passes, status, guests } = req.body;

    const current = await getInvitationByCodeJson(targetCode);
    if (!current) {
      return res.status(404).json({ success: false, error: 'Invitación no encontrada.' });
    }

    const updatedCode = (code ? code.trim().toUpperCase() : targetCode);
    if (updatedCode !== targetCode) {
      const conflict = await getInvitationByCodeJson(updatedCode);
      if (conflict) {
        return res.status(400).json({ success: false, error: `El código ${updatedCode} ya está en uso por otra invitación.` });
      }
    }

    const newPasses = passes !== undefined ? parseInt(passes, 10) : current.passes;
    let updatedGuests: Guest[] = guests || current.guests || [];
    if (updatedGuests.length < newPasses) {
      const diff = newPasses - updatedGuests.length;
      for (let i = 0; i < diff; i++) {
        updatedGuests.push({
          name: `Acompañante ${updatedGuests.length + 1}`,
          isAttending: status === 'declined' ? false : true,
          dietaryRestrictions: 'none',
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
      updatedAt: new Date().toISOString(),
    };

    if (updatedCode !== targetCode) {
      await deleteInvitationJson(targetCode);
    }
    await saveInvitationJson(updatedInvitation);
    res.json({ success: true, invitation: updatedInvitation });
  });

  // Eliminar invitación
  app.delete('/api/admin/rsvps/:code', async (req, res) => {
    await deleteInvitationJson(req.params.code.toUpperCase());
    res.json({ success: true });
  });

  // Correos simulados
  app.get('/api/admin/emails', (_req, res) => {
    res.json(readEmails());
  });
  app.delete('/api/admin/emails', (_req, res) => {
    clearEmails();
    res.json({ success: true });
  });

  // Estado de la base de datos (tab "Base de datos") — engine JSON puro
  app.get('/api/admin/db/status', async (_req, res) => {
    try {
      const invs = await getInvitationsJson();
      const exists = fs.existsSync(INVITATIONS_PATH);
      const size = exists ? (fs.statSync(INVITATIONS_PATH).size / 1024).toFixed(1) + ' KB' : '0 KB';
      res.json({
        engine: 'JSON (invitations.json)',
        compatibleWith: ['DonWeb Linux', 'cPanel Node.js', 'Local / VPS', 'Cloud'],
        sqliteFile: INVITATIONS_PATH,
        sqliteSize: size,
        totalInvitations: invs.length,
        totalGuests: invs.reduce((acc, i) => acc + (i.guests?.length || 0), 0),
      });
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  // Descarga del archivo JSON crudo (reemplaza download-sqlite)
  app.get('/api/admin/db/download-sqlite', (_req, res) => {
    if (fs.existsSync(INVITATIONS_PATH)) {
      res.download(INVITATIONS_PATH, 'invitations.json');
    } else {
      res.status(404).json({ error: 'Archivo de datos no encontrado.' });
    }
  });

  // Dump SQL generado desde el JSON (para migrar a DonWeb/MySQL si se desea)
  app.get('/api/admin/db/download-sql', (_req, res) => {
    try {
      const sql = generateSqlDumpFromJson();
      res.setHeader('Content-Type', 'application/sql');
      res.setHeader('Content-Disposition', 'attachment; filename="boda_donweb_dump.sql"');
      res.send(sql);
    } catch (err) {
      res.status(500).json({ error: String(err) });
    }
  });

  // ---------------- API: RSVP público ----------------
  app.get('/api/rsvp/:code', async (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    const invitation = await getInvitationByCodeJson(code);
    if (invitation) {
      res.json({ success: true, invitation });
    } else {
      res.status(404).json({
        success: false,
        error: 'El código de invitación no es válido. Por favor, verificá que esté bien escrito.',
      });
    }
  });

  app.post('/api/rsvp/:code', async (req, res) => {
    const code = req.params.code.trim().toUpperCase();
    const { guests, status } = req.body;
    if (!guests || !Array.isArray(guests)) {
      return res.status(400).json({ success: false, error: 'Datos de invitados inválidos.' });
    }
    const invitation = await getInvitationByCodeJson(code);
    if (!invitation) {
      return res.status(404).json({ success: false, error: 'Invitación no encontrada.' });
    }

    const updated: Invitation = {
      ...invitation,
      guests,
      status,
      updatedAt: new Date().toISOString(),
    };
    await saveInvitationJson(updated);

    // Email simulado con el detalle por pase (igual que la referencia)
    const attendingCount = guests.filter((g: Guest) => g.isAttending).length;
    const emailBody = `
        ¡Hola ${updated.names}!

        Hemos recibido tu confirmación de asistencia para la boda de Mari & Simón.

        Detalles de tu confirmación:
        Código: ${updated.code}
        Estado General: ${status === 'confirmed' ? 'Confirmado 🎉' : 'Declinado 😔'}
        Pases reservados / confirmados: ${updated.passes} / ${attendingCount}

        Invitados:
        ${guests
          .map(
            (g: Guest, i: number) => `
          ${i + 1}. ${g.name} - ${g.isAttending ? 'Asiste ✅' : 'No asiste ❌'}
             Restricciones alimentarias: ${g.dietaryRestrictions || 'Ninguna'}
             ¿Necesita Traslado?: ${g.needsTransport ? `Sí (Punto: ${g.transportLocation || 'No especificado'})` : 'No'}
             Notas: ${g.notes || 'Ninguna'}`,
          )
          .join('')}

        ¡Gracias por completar la información! Nos vemos el gran día en Potrerillos, Mendoza.

        Con cariño,
        Mari & Simón 💍
      `;
    const simulatedEmail: SimulatedEmail = {
      id: Math.random().toString(36).slice(2, 11),
      to: `invitados_${code.toLowerCase()}@boda-marisimon.com`,
      subject: `Confirmación de RSVP: ${updated.names} - Boda Mari & Simón`,
      body: emailBody,
      timestamp: new Date().toISOString(),
    };
    writeEmail(simulatedEmail);

    res.json({ success: true, invitation: updated });
  });

  // Listado crudo (debug / inspección)
  app.get('/api/admin/raw', (_req, res) => {
    res.json(readInvitationsRaw());
  });

  // ---------------- Vite (dev SSR middleware) / static (prod) ----------------
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      root: ROOT_DIR,
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(ROOT_DIR, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Boda app (React + JSON store) corriendo en http://localhost:${PORT}`);
    console.log(`  Home espejo Framer (legacy):  http://localhost:3001 (npm run server)`);
    console.log(`  RSVP standalone:              http://localhost:${PORT}/?view=rsvp`);
    console.log(`  Back Office:                  http://localhost:${PORT}/?view=admin`);
  });
}

startServer();
