const steps = {
  code: document.getElementById('step-code'),
  guests: document.getElementById('step-guests'),
  success: document.getElementById('step-success')
};

const codeInput = document.getElementById('invitation-code');
const codeError = document.getElementById('code-error');
const guestError = document.getElementById('guest-error');
const guestList = document.getElementById('guest-list');
const codeForm = document.getElementById('code-form');
const guestForm = document.getElementById('guest-form');
let invitation = null;
let guests = [];

function showStep(name) {
  Object.entries(steps).forEach(([key, element]) => {
    element.hidden = key !== name;
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setError(element, message = '') {
  element.textContent = message;
  element.hidden = !message;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function updateAttendanceCount() {
  const attending = guests.filter(guest => guest.isAttending).length;
  document.getElementById('attendance-count').textContent = `${attending} de ${guests.length} asisten`;
}

function renderGuests() {
  guestList.innerHTML = guests.map((guest, index) => {
    const attending = Boolean(guest.isAttending);
    const location = guest.transportLocation || '';
    const locationOptions = [
      ['Mendoza Centro (Plaza Independencia)', 'Mendoza Centro'],
      ['Chacras de Coria', 'Chacras de Coria']
    ];
    if (location && !locationOptions.some(([value]) => value === location)) {
      locationOptions.push([location, location]);
    }
    return `
      <section class="guest-card" data-index="${index}">
        <div class="guest-card-head">
          <h4>Pase ${index + 1}</h4>
          <label class="attend-toggle">
            <input type="checkbox" data-field="isAttending" ${attending ? 'checked' : ''} />
            <span>${attending ? 'Asiste' : 'No asiste'}</span>
          </label>
        </div>
        <div class="guest-fields" ${attending ? '' : 'hidden'}>
          <div class="guest-field full">
            <label for="guest-name-${index}">Nombre y apellido</label>
            <input id="guest-name-${index}" data-field="name" type="text" value="${escapeHtml(guest.name)}" placeholder="Nombre completo" ${attending ? 'required' : ''} />
          </div>
          <div class="guest-field">
            <label for="guest-diet-${index}">Menú / dieta</label>
            <select id="guest-diet-${index}" data-field="dietary">
              <option value="none" ${guest.dietary === 'none' || guest.dietaryRestrictions === 'none' ? 'selected' : ''}>Menú estándar</option>
              <option value="celiac" ${guest.dietary === 'celiac' || guest.dietaryRestrictions === 'celiac' ? 'selected' : ''}>Sin TACC</option>
              <option value="vegetarian" ${guest.dietary === 'vegetarian' || guest.dietaryRestrictions === 'vegetarian' ? 'selected' : ''}>Vegetariano</option>
              <option value="vegan" ${guest.dietary === 'vegan' || guest.dietaryRestrictions === 'vegan' ? 'selected' : ''}>Vegano</option>
              <option value="child" ${guest.dietary === 'child' || guest.dietaryRestrictions === 'child' ? 'selected' : ''}>Infantil</option>
              <option value="allergy" ${guest.dietary === 'allergy' || guest.dietaryRestrictions === 'allergy' ? 'selected' : ''}>Alergia / especial</option>
            </select>
          </div>
          <div class="guest-field">
            <label for="guest-notes-${index}">Notas o alergias</label>
            <input id="guest-notes-${index}" data-field="notes" type="text" value="${escapeHtml(guest.notes)}" placeholder="Aclaraciones" />
          </div>
          <div class="guest-field full">
            <label class="transport-field">
              <input type="checkbox" data-field="needsTransport" ${guest.needsTransport ? 'checked' : ''} />
              <span>Necesita traslado oficial</span>
            </label>
          </div>
          <div class="meeting-wrap" ${guest.needsTransport ? '' : 'hidden'}>
            <div class="guest-field">
              <label for="guest-location-${index}">Punto de encuentro</label>
              <select id="guest-location-${index}" data-field="transportLocation">
                <option value="">Elegir punto</option>
                ${locationOptions.map(([value, label]) => `<option value="${escapeHtml(value)}" ${location === value ? 'selected' : ''}>${escapeHtml(label)}</option>`).join('')}
              </select>
            </div>
          </div>
        </div>
      </section>
    `;
  }).join('');
  updateAttendanceCount();
}

async function validateCode(rawCode) {
  const code = String(rawCode || '').trim().toUpperCase();
  if (!code) {
    setError(codeError, 'Ingresá el código de tu invitación.');
    return;
  }
  const button = codeForm.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Consultando...';
  setError(codeError);

  try {
    const response = await fetch(`/api/invitations/verify/${encodeURIComponent(code)}`);
    const data = await response.json();
    if (!response.ok || !data.valid) {
      setError(codeError, data.error || 'No encontramos ese código. Revisá que esté bien escrito.');
      return;
    }
    invitation = { ...data, code };
    guests = Array.from({ length: Number(data.maxPasses) || 1 }, (_, index) => {
      const saved = data.guests?.[index] || {};
      return {
        name: saved.name || '',
        isAttending: Boolean(saved.isAttending),
        dietary: saved.dietary || saved.dietaryRestrictions || 'none',
        notes: saved.notes || '',
        needsTransport: Boolean(saved.needsTransport),
        transportLocation: saved.transportLocation || ''
      };
    });
    document.getElementById('invitation-code-label').textContent = code;
    document.getElementById('invitation-heading').textContent = `¡Hola ${data.guestName}!`;
    document.getElementById('invitation-summary').textContent = `Tenés ${guests.length} ${guests.length === 1 ? 'pase reservado' : 'pases reservados'}. Completá la información individual de quienes asistan.`;
    renderGuests();
    const url = new URL(window.location.href);
    url.searchParams.set('code', code);
    window.history.replaceState({}, '', url);
    showStep('guests');
  } catch (error) {
    setError(codeError, 'No pudimos conectar con el servidor. Intentá nuevamente.');
  } finally {
    button.disabled = false;
    button.innerHTML = 'Continuar <span aria-hidden="true">&#8594;</span>';
  }
}

codeForm.addEventListener('submit', event => {
  event.preventDefault();
  validateCode(codeInput.value);
});

document.querySelectorAll('[data-demo-code]').forEach(button => {
  button.addEventListener('click', () => {
    codeInput.value = button.dataset.demoCode;
    validateCode(codeInput.value);
  });
});

guestList.addEventListener('input', event => {
  const field = event.target.dataset.field;
  if (!field) return;
  const card = event.target.closest('[data-index]');
  const index = Number(card.dataset.index);
  if (field === 'isAttending') {
    guests[index].isAttending = event.target.checked;
    card.querySelector('.attend-toggle span').textContent = event.target.checked ? 'Asiste' : 'No asiste';
    const fields = card.querySelector('.guest-fields');
    fields.hidden = !event.target.checked;
    card.querySelector('[data-field="name"]').required = event.target.checked;
    updateAttendanceCount();
    return;
  }
  if (field === 'needsTransport') {
    guests[index].needsTransport = event.target.checked;
    card.querySelector('.meeting-wrap').hidden = !event.target.checked;
    if (!event.target.checked) guests[index].transportLocation = '';
    return;
  }
  guests[index][field] = event.target.value;
});

guestList.addEventListener('change', event => {
  const field = event.target.dataset.field;
  if (!field || field === 'isAttending' || field === 'needsTransport') return;
  const index = Number(event.target.closest('[data-index]').dataset.index);
  guests[index][field] = event.target.value;
});

guestForm.addEventListener('submit', async event => {
  event.preventDefault();
  setError(guestError);
  if (!guestForm.reportValidity()) return;
  const missingMeetingPoint = guests.some(guest => guest.isAttending && guest.needsTransport && !guest.transportLocation);
  if (missingMeetingPoint) {
    setError(guestError, 'Elegí un punto de encuentro para cada persona que necesita traslado.');
    return;
  }

  const button = document.getElementById('submit-rsvp');
  button.disabled = true;
  button.textContent = 'Guardando...';
  try {
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: invitation.code, guests })
    });
    const data = await response.json();
    if (!response.ok || !data.success) {
      setError(guestError, data.error || 'No se pudo guardar tu respuesta.');
      return;
    }
    const attending = guests.filter(guest => guest.isAttending);
    document.getElementById('success-heading').textContent = attending.length ? '¡Nos vemos en Mendoza!' : '¡Gracias por avisarnos!';
    document.getElementById('success-copy').textContent = attending.length
      ? 'Tu confirmación quedó registrada. Nos alegra mucho que nos acompañes.'
      : 'Registramos que no vas a poder acompañarnos. Gracias por contarnos.';
    document.getElementById('success-summary').innerHTML = `<strong>${escapeHtml(invitation.guestName)}</strong><br>${attending.length ? attending.map(guest => escapeHtml(guest.name)).join('<br>') : 'No asistirán'}<br><span>Código ${escapeHtml(invitation.code)}</span>`;
    showStep('success');
  } catch (error) {
    setError(guestError, 'No pudimos conectar con el servidor. Intentá nuevamente.');
  } finally {
    button.disabled = false;
    button.innerHTML = 'Enviar confirmación <span aria-hidden="true">&#8594;</span>';
  }
});

function returnToCode() {
  invitation = null;
  const url = new URL(window.location.href);
  url.searchParams.delete('code');
  window.history.replaceState({}, '', url);
  setError(codeError);
  showStep('code');
}

document.getElementById('change-code').addEventListener('click', returnToCode);
document.getElementById('cancel-rsvp').addEventListener('click', returnToCode);
document.getElementById('edit-response').addEventListener('click', () => showStep('guests'));

const initialCode = new URLSearchParams(window.location.search).get('code');
if (initialCode) {
  codeInput.value = initialCode;
  validateCode(initialCode);
}