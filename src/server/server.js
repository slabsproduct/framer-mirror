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

function makeGuestSlots(maxPasses, guests = []) {
  const count = Math.max(1, Number(maxPasses) || 1);
  return Array.from({ length: count }, (_, index) => {
    const guest = guests[index] || {};
    return {
      name: guest.name || '',
      isAttending: Boolean(guest.isAttending),
      dietary: guest.dietary || guest.dietaryRestrictions || 'none',
      dietaryRestrictions: guest.dietaryRestrictions || guest.dietary || 'none',
      notes: guest.notes || '',
      needsTransport: Boolean(guest.needsTransport),
      transportLocation: guest.transportLocation || ''
    };
  });
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
  return res.json(invitations.map(invitation => ({
    ...invitation,
    guests: makeGuestSlots(invitation.maxPasses, invitation.guests)
  })));
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
    guests: makeGuestSlots(Number(maxPasses) || 1),
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
  if (maxPasses) invitations[idx].maxPasses = Math.max(1, Number(maxPasses));
  if (notes !== undefined) invitations[idx].notes = notes;
  if (status) invitations[idx].status = status;
  invitations[idx].guests = makeGuestSlots(
    invitations[idx].maxPasses,
    Array.isArray(req.body.guests) ? req.body.guests : invitations[idx].guests
  );

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
      status: found.status,
      guests: makeGuestSlots(found.maxPasses, found.guests)
    });
  }

  return res.status(404).json({ valid: false, error: 'Código no encontrado' });
});

// ----------------- GESTIÓN DE RESPUESTAS (RSVP) -----------------
app.post('/api/rsvp', (req, res) => {
  const { code, guests, attending, guestsCount, dietary, needBus, message } = req.body;
  const cleanCode = (code || '').trim().toUpperCase();
  const invitations = readJson(INVITATIONS_FILE, []);
  const invitation = invitations.find(item => item.code === cleanCode);

  if (!invitation) {
    return res.status(404).json({ success: false, error: 'Código de invitación no válido.' });
  }

  let guestPasses;
  if (Array.isArray(guests)) {
    if (guests.length > invitation.maxPasses) {
      return res.status(400).json({ success: false, error: 'La respuesta supera los pases reservados.' });
    }
    guestPasses = makeGuestSlots(invitation.maxPasses, guests);
  } else {
    const attendingCount = attending === 'no' ? 0 : Math.min(invitation.maxPasses, Number(guestsCount) || 1);
    guestPasses = makeGuestSlots(invitation.maxPasses).map((guest, index) => ({
      ...guest,
      name: index === 0 ? (req.body.name || '') : '',
      isAttending: index < attendingCount,
      dietary: index === 0 ? (dietary || 'none') : 'none',
      dietaryRestrictions: index === 0 ? (dietary || 'none') : 'none',
      needsTransport: needBus === 'yes' && index < attendingCount,
      transportLocation: needBus === 'yes' ? (req.body.transportLocation || 'Plaza General Espejo, Mendoza Capital') : '',
      notes: index === 0 ? (message || '') : ''
    }));
  }

  const attendingGuests = guestPasses.filter(guest => guest.isAttending);
  const transportGuests = attendingGuests.filter(guest => guest.needsTransport);
  const attendingStatus = attendingGuests.length > 0 ? 'yes' : 'no';
  const rsvps = readJson(RSVPS_FILE, []);
  const previous = rsvps.find(item => item.code === cleanCode);
  const newRsvp = {
    id: previous?.id || Date.now().toString(),
    name: invitation.guestName,
    code: cleanCode,
    attending: attendingStatus,
    guestsCount: attendingGuests.length,
    dietary: attendingGuests.find(guest => guest.dietary !== 'none')?.dietary || 'none',
    needBus: transportGuests.length > 0 ? 'yes' : 'no',
    busSeats: transportGuests.length,
    guests: guestPasses,
    message: message || '',
    boardedBus: previous?.boardedBus || false,
    createdAt: new Date().toISOString()
  };

  writeJson(RSVPS_FILE, [newRsvp, ...rsvps.filter(item => item.code !== cleanCode)]);
  invitation.guests = guestPasses;
  invitation.status = attendingStatus === 'yes' ? 'confirmed' : 'declined';
  invitation.confirmedAt = newRsvp.createdAt;
  writeJson(INVITATIONS_FILE, invitations);

  console.log(`[RSVP] ${invitation.guestName} (${cleanCode}) - Asisten: ${attendingGuests.length} | Traslado: ${transportGuests.length}`);
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
  const totalConfirmedPasses = attendingList.reduce((acc, curr) => acc + (
    Array.isArray(curr.guests) ? curr.guests.filter(guest => guest.isAttending).length : (curr.guestsCount || 1)
  ), 0);
  const busSeatsTotal = attendingList.reduce((acc, curr) => acc + (
    Array.isArray(curr.guests) ? curr.guests.filter(guest => guest.isAttending && guest.needsTransport).length : (curr.needBus === 'yes' ? (curr.busSeats || curr.guestsCount || 1) : 0)
  ), 0);

  const dietary = attendingList.reduce((acc, curr) => {
    if (Array.isArray(curr.guests)) {
      curr.guests.filter(guest => guest.isAttending && guest.dietary && guest.dietary !== 'none').forEach(guest => {
        acc[guest.dietary] = (acc[guest.dietary] || 0) + 1;
      });
    } else if (curr.dietary && curr.dietary !== 'none') {
      acc[curr.dietary] = (acc[curr.dietary] || 0) + (curr.guestsCount || 1);
    }
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
  const csvCell = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const rows = [['Titular', 'Codigo', 'Asistente', 'Asiste', 'Menu', 'Traslado', 'Punto de encuentro', 'Notas', 'Fecha']];

  rsvps.forEach(rsvp => {
    if (Array.isArray(rsvp.guests) && rsvp.guests.length) {
      rsvp.guests.forEach((guest, index) => rows.push([
        rsvp.name,
        rsvp.code || '',
        guest.name || `Pase ${index + 1}`,
        guest.isAttending ? 'SI' : 'NO',
        guest.dietary || guest.dietaryRestrictions || 'none',
        guest.needsTransport ? 'SI' : 'NO',
        guest.transportLocation || '',
        guest.notes || '',
        rsvp.createdAt || ''
      ]));
      return;
    }
    rows.push([
      rsvp.name,
      rsvp.code || '',
      rsvp.name,
      rsvp.attending === 'yes' ? 'SI' : 'NO',
      rsvp.dietary || 'none',
      rsvp.needBus === 'yes' ? 'SI' : 'NO',
      rsvp.transportLocation || '',
      rsvp.message || '',
      rsvp.createdAt || ''
    ]);
  });

  const csv = rows.map(row => row.map(csvCell).join(',')).join('\n') + '\n';

  res.header('Content-Type', 'text/csv; charset=utf-8');
  res.attachment('invitados_boda_mari_y_simon.csv');
  return res.send(csv);
});

app.listen(PORT, () => {
  console.log(`[Backoffice API] Servidor corriendo en http://localhost:${PORT}`);
});
