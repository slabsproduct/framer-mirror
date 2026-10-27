import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Archivos de base de datos local
const RSVPS_FILE = path.join(__dirname, 'rsvps.json');
const INVITATIONS_FILE = path.join(__dirname, 'invitations.json');
const BUS_CONFIG_FILE = path.join(__dirname, 'bus_config.json');

// Código secreto maestro para el Backoffice
const SECRET_ADMIN_CODE = process.env.ADMIN_SECRET || 'MariMiluySimon.0801';

// Helpers de persistencia
function readJson(file, defaultData = []) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(defaultData, null, 2), 'utf-8');
    return defaultData;
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch {
    return defaultData;
  }
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

// Configuración inicial del bus
function getBusConfig() {
  return readJson(BUS_CONFIG_FILE, {
    totalCapacity: 45,
    departureLocation: 'Plaza General Espejo, Mendoza Capital',
    destinationLocation: 'La Martineta, Potrerillos',
    departureTime: '14:00 hs',
    returnTime: '02:30 hs'
  });
}

// Inicializar códigos demo si está vacío
function initDefaultInvitations() {
  const invitations = readJson(INVITATIONS_FILE, []);
  if (invitations.length === 0) {
    const defaults = [
      { id: '1', code: 'MARISIMON', guestName: 'Mari & Simón (Novios)', maxPasses: 2, status: 'confirmed', notes: 'Mesa Principal' },
      { id: '2', code: 'FAMILIAPEREZ', guestName: 'Familia Pérez', maxPasses: 4, status: 'pending', notes: 'Familia Mendoza' },
      { id: '3', code: 'JUANVIP', guestName: 'Juan Rodríguez', maxPasses: 2, status: 'pending', notes: 'Amigo de Simón' },
      { id: '4', code: 'INVITADO1', guestName: 'Amigo Especial', maxPasses: 1, status: 'pending', notes: '' }
    ];
    writeJson(INVITATIONS_FILE, defaults);
  }
}
initDefaultInvitations();

// ----------------- AUTENTICACIÓN CON CÓDIGO SECRETO -----------------
app.post('/api/admin/login', (req, res) => {
  const { secretCode, password } = req.body;
  const provided = (secretCode || password || '').trim();

  if (provided === SECRET_ADMIN_CODE) {
    return res.json({
      success: true,
      token: 'admin-session-' + Date.now(),
      role: 'admin',
      name: 'Mari & Simón'
    });
  }
  return res.status(401).json({ error: 'Código secreto inválido. Por favor verifica el acceso.' });
});

// ----------------- GESTIÓN DE CÓDIGOS DE INVITACIÓN -----------------
app.get('/api/invitations', (req, res) => {
  const invitations = readJson(INVITATIONS_FILE, []);
  return res.json(invitations);
});

app.post('/api/invitations', (req, res) => {
  const { guestName, code, maxPasses, notes } = req.body;
  if (!guestName || !code) {
    return res.status(400).json({ error: 'Nombre y código son requeridos' });
  }

  const cleanCode = code.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
  const invitations = readJson(INVITATIONS_FILE, []);

  if (invitations.some(i => i.code === cleanCode)) {
    return res.status(400).json({ error: 'Este código ya está en uso' });
  }

  const newInvitation = {
    id: Date.now().toString(),
    code: cleanCode,
    guestName: guestName.trim(),
    maxPasses: Number(maxPasses) || 1,
    notes: notes || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  invitations.unshift(newInvitation);
  writeJson(INVITATIONS_FILE, invitations);

  return res.status(201).json(newInvitation);
});

app.put('/api/invitations/:id', (req, res) => {
  const { id } = req.params;
  const { guestName, maxPasses, notes, status } = req.body;
  let invitations = readJson(INVITATIONS_FILE, []);
  const idx = invitations.findIndex(i => i.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: 'Invitación no encontrada' });
  }

  if (guestName) invitations[idx].guestName = guestName.trim();
  if (maxPasses) invitations[idx].maxPasses = Number(maxPasses);
  if (notes !== undefined) invitations[idx].notes = notes;
  if (status) invitations[idx].status = status;

  writeJson(INVITATIONS_FILE, invitations);
  return res.json(invitations[idx]);
});

app.delete('/api/invitations/:id', (req, res) => {
  const { id } = req.params;
  let invitations = readJson(INVITATIONS_FILE, []);
  invitations = invitations.filter(i => i.id !== id);
  writeJson(INVITATIONS_FILE, invitations);
  return res.json({ success: true });
});

// Verificar código para el invitado (RSVP modal)
app.get('/api/invitations/verify/:code', (req, res) => {
  const cleanCode = (req.params.code || '').trim().toUpperCase();
  const invitations = readJson(INVITATIONS_FILE, []);
  const found = invitations.find(i => i.code === cleanCode);

  if (found) {
    return res.json({
      valid: true,
      guestName: found.guestName,
      maxPasses: found.maxPasses,
      status: found.status
    });
  }

  return res.status(404).json({ valid: false, error: 'Código no encontrado' });
});

// ----------------- GESTIÓN DE RESPUESTAS (RSVP) -----------------
app.post('/api/rsvp', (req, res) => {
  const { name, code, attending, guestsCount, dietary, needBus, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  const rsvps = readJson(RSVPS_FILE, []);
  const newRsvp = {
    id: Date.now().toString(),
    name,
    code: (code || '').trim().toUpperCase(),
    attending: attending || 'yes',
    guestsCount: Number(guestsCount) || (attending === 'yes' ? 1 : 0),
    dietary: dietary || 'none',
    needBus: needBus || 'no',
    busSeats: needBus === 'yes' ? Number(guestsCount) || 1 : 0,
    message: message || '',
    boardedBus: false, // Check-in para el chofer
    createdAt: new Date().toISOString()
  };

  rsvps.unshift(newRsvp);
  writeJson(RSVPS_FILE, rsvps);

  // Actualizar estado de la invitación asociada
  if (code) {
    const invitations = readJson(INVITATIONS_FILE, []);
    const inv = invitations.find(i => i.code === code.trim().toUpperCase());
    if (inv) {
      inv.status = attending === 'yes' ? 'confirmed' : 'declined';
      inv.confirmedAt = new Date().toISOString();
      writeJson(INVITATIONS_FILE, invitations);
    }
  }

  console.log(`[RSVP] ${name} (${newRsvp.code}) - Asiste: ${attending} | Bus: ${newRsvp.busSeats}`);
  return res.status(201).json({ success: true, data: newRsvp });
});

app.get('/api/rsvps', (req, res) => {
  const rsvps = readJson(RSVPS_FILE, []);
  return res.json({ total: rsvps.length, rsvps });
});

// Marcar check-in en bus
app.patch('/api/rsvps/:id/boarded', (req, res) => {
  const { id } = req.params;
  const { boarded } = req.body;
  const rsvps = readJson(RSVPS_FILE, []);
  const r = rsvps.find(x => x.id === id);
  if (r) {
    r.boardedBus = !!boarded;
    writeJson(RSVPS_FILE, rsvps);
    return res.json({ success: true, rsvp: r });
  }
  return res.status(404).json({ error: 'No encontrado' });
});

// ----------------- GESTIÓN DEL BUS Y MANIFIESTO -----------------
app.get('/api/bus/manifest', (req, res) => {
  const rsvps = readJson(RSVPS_FILE, []);
  const busConfig = getBusConfig();

  const passengers = rsvps.filter(r => r.attending === 'yes' && (r.needBus === 'yes' || r.busSeats > 0));
  const totalReservedSeats = passengers.reduce((sum, p) => sum + (p.busSeats || p.guestsCount || 1), 0);
  const availableSeats = Math.max(0, busConfig.totalCapacity - totalReservedSeats);

  return res.json({
    config: busConfig,
    totalCapacity: busConfig.totalCapacity,
    reservedSeats: totalReservedSeats,
    availableSeats,
    occupancyPercent: Math.min(100, Math.round((totalReservedSeats / busConfig.totalCapacity) * 100)),
    passengers
  });
});

app.post('/api/bus/config', (req, res) => {
  const { totalCapacity, departureLocation, destinationLocation, departureTime, returnTime } = req.body;
  const current = getBusConfig();
  const updated = {
    ...current,
    totalCapacity: Number(totalCapacity) || current.totalCapacity,
    departureLocation: departureLocation || current.departureLocation,
    destinationLocation: destinationLocation || current.destinationLocation,
    departureTime: departureTime || current.departureTime,
    returnTime: returnTime || current.returnTime
  };
  writeJson(BUS_CONFIG_FILE, updated);
  return res.json(updated);
});

// Exportar manifiesto del bus en CSV
app.get('/api/bus/export/csv', (req, res) => {
  const rsvps = readJson(RSVPS_FILE, []);
  const passengers = rsvps.filter(r => r.attending === 'yes' && (r.needBus === 'yes' || r.busSeats > 0));
  
  let csv = 'Titular,Codigo,Asientos Reservados,Abordado,Punto de Salida,Horario,Fecha Registro\n';
  passengers.forEach(p => {
    const seats = p.busSeats || p.guestsCount || 1;
    const boarded = p.boardedBus ? 'SI' : 'NO';
    csv += `"${p.name}","${p.code || ''}",${seats},"${boarded}","Plaza General Espejo","14:00 hs","${p.createdAt}"\n`;
  });

  res.header('Content-Type', 'text/csv; charset=utf-8');
  res.attachment('manifiesto_pasajeros_bus_boda.csv');
  return res.send(csv);
});

// Estadísticas globales
app.get('/api/stats', (req, res) => {
  const rsvps = readJson(RSVPS_FILE, []);
  const invitations = readJson(INVITATIONS_FILE, []);
  const busConfig = getBusConfig();

  const attendingList = rsvps.filter(r => r.attending === 'yes');
  const totalConfirmedPasses = attendingList.reduce((acc, curr) => acc + (curr.guestsCount || 1), 0);
  const busSeatsTotal = attendingList.reduce((acc, curr) => acc + (curr.needBus === 'yes' ? (curr.busSeats || curr.guestsCount || 1) : 0), 0);

  const dietary = attendingList.reduce((acc, curr) => {
    acc[curr.dietary] = (acc[curr.dietary] || 0) + (curr.guestsCount || 1);
    return acc;
  }, {});

  return res.json({
    totalInvitations: invitations.length,
    confirmedInvitations: invitations.filter(i => i.status === 'confirmed').length,
    pendingInvitations: invitations.filter(i => i.status === 'pending').length,
    totalConfirmedPasses,
    declinedCount: rsvps.filter(r => r.attending === 'no').length,
    busRequired: busSeatsTotal,
    busCapacity: busConfig.totalCapacity,
    busAvailable: Math.max(0, busConfig.totalCapacity - busSeatsTotal),
    dietary
  });
});

// Exportar CSV completo de invitados
app.get('/api/export/csv', (req, res) => {
  const rsvps = readJson(RSVPS_FILE, []);
  let csv = 'Nombre,Codigo,Asiste,Pases,Menu,Bus,Asientos Bus,Mensaje,Fecha\n';

  rsvps.forEach(r => {
    const line = [
      `"${r.name}"`,
      `"${r.code || ''}"`,
      r.attending === 'yes' ? 'SI' : 'NO',
      r.guestsCount || 1,
      `"${r.dietary}"`,
      r.needBus === 'yes' ? 'SI' : 'NO',
      r.busSeats || 0,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      `"${r.createdAt}"`
    ].join(',');
    csv += line + '\n';
  });

  res.header('Content-Type', 'text/csv; charset=utf-8');
  res.attachment('invitados_boda_mari_y_simon.csv');
  return res.send(csv);
});

app.listen(PORT, () => {
  console.log(`[Backoffice API] Servidor corriendo en http://localhost:${PORT}`);
});
