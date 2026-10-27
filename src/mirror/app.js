// src/mirror/app.js - Controlador modular para el clon 1:1 de Framer
// Implementa el flujo de validación estricto de código de invitación en 2 pasos y botón B.O.

import './rsvp.css';

console.log('[Framer Mirror] Inicializando controlador modular 1:1 con verificación de código y acceso B.O....');

function injectRsvpModal() {
  if (document.getElementById('custom-rsvp-modal')) return;

  const modalHtml = `
    <div id="custom-rsvp-modal" class="rsvp-modal-backdrop" style="display: none;">
      <div class="rsvp-modal-card">
        <button id="close-rsvp-btn" class="rsvp-close-btn">&times;</button>
        
        <!-- PASO 1: Validación obligatoria de Código de Invitación + Botón B.O. -->
        <div id="rsvp-step-code">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span class="rsvp-badge-pill">Confirmación de Asistencia</span>
            <a href="/admin.html" id="btn-modal-bo" class="bo-header-btn" title="Panel de Administración (Back Office)">
              🔐 B.O.
            </a>
          </div>

          <div class="rsvp-header" style="text-align: center;">
            <h3>Mari & Simón</h3>
            <p>Ingresá el <strong>código de invitación</strong> exclusivo que te enviamos para ver tus pases reservados.</p>
          </div>

          <form id="rsvp-gate-form">
            <div class="form-group">
              <label style="text-align: center; display: block;">CÓDIGO DE INVITACIÓN *</label>
              <input 
                type="text" 
                id="rsvp-gate-code" 
                placeholder="Ej: FAMILIAPEREZ" 
                required 
                autocomplete="off"
                style="text-transform: uppercase; font-size: 18px; letter-spacing: 2px; font-weight: 700; text-align: center; padding: 14px;" 
              />
              <div id="rsvp-gate-error" class="code-feedback-error" style="display: none;"></div>
            </div>

            <button type="submit" id="btn-validate-code" class="rsvp-submit-btn">
              Ingresar a mi Invitación ➔
            </button>
          </form>
        </div>

        <!-- PASO 2: Formulario de Confirmación (Solo con código válido) -->
        <div id="rsvp-step-form" style="display: none;">
          <div class="rsvp-header">
            <div class="guest-welcome-badge">
              <span>Invitación para:</span>
              <strong id="rsvp-welcome-name">Invitado</strong>
              <small id="rsvp-welcome-passes">1 pase asignado</small>
            </div>
            <p style="margin-top: 10px; margin-bottom: 16px;">Completá los datos de tu confirmación:</p>
          </div>

          <form id="rsvp-final-form">
            <div class="form-group">
              <label>¿ASISTIRÁS AL EVENTO? *</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" name="attending" value="yes" checked /> Sí, asistiré 🎉
                </label>
                <label class="radio-label">
                  <input type="radio" name="attending" value="no" /> No podré asistir
                </label>
              </div>
            </div>

            <div id="attending-fields">
              <div class="form-group">
                <label>CANTIDAD DE PERSONAS QUE ASISTEN</label>
                <select id="rsvp-guests">
                  <!-- Opciones dinámicas según maxPasses -->
                </select>
              </div>

              <div class="form-group">
                <label>RESTRICCIÓN ALIMENTARIA / MENÚ</label>
                <select id="rsvp-dietary">
                  <option value="none">Menú estándar / Ninguna</option>
                  <option value="celiac">Celíaco / Sin TACC</option>
                  <option value="vegetarian">Vegetariano</option>
                  <option value="vegan">Vegano</option>
                  <option value="other">Otra alergia</option>
                </select>
              </div>

              <div class="form-group">
                <label>¿UTILIZARÁN EL SERVICIO DE BUS COMPARTIDO?</label>
                <select id="rsvp-bus">
                  <option value="yes">Sí, desde Mendoza Capital a Potrerillos</option>
                  <option value="no">No, viajamos por nuestra cuenta / auto</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>MENSAJE O DEDICATORIA PARA MARI Y SIMÓN</label>
              <textarea id="rsvp-message" rows="3" placeholder="¡Dejales un mensaje de felicitaciones o recomendá una canción!"></textarea>
            </div>

            <button type="submit" id="submit-rsvp-btn" class="rsvp-submit-btn">
              Confirmar Asistencia
            </button>

            <div style="text-align: center; margin-top: 14px;">
              <button type="button" id="btn-back-code" style="background: none; border: none; font-size: 12px; color: #777; cursor: pointer; text-decoration: underline;">
                ← Ingresar con otro código
              </button>
            </div>
          </form>
        </div>

        <!-- PASO 3: Éxito -->
        <div id="rsvp-step-success" style="display: none; text-align: center; padding: 20px 0;">
          <div style="font-size: 52px; margin-bottom: 12px;">🥂</div>
          <h3 style="font-family: 'Melagu Regular', serif; font-size: 32px; color: #363b1f; margin-bottom: 8px;">¡Muchas Gracias!</h3>
          <p id="rsvp-success-summary" style="color: #555; font-size: 14px; line-height: 1.6; margin-bottom: 24px;">Hemos registrado tu respuesta con éxito.</p>
          <button id="success-close-btn" class="rsvp-submit-btn" style="background-color: #363b1f;">Cerrar</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('custom-rsvp-modal');
  const closeBtn = document.getElementById('close-rsvp-btn');
  const successCloseBtn = document.getElementById('success-close-btn');

  const stepCode = document.getElementById('rsvp-step-code');
  const stepForm = document.getElementById('rsvp-step-form');
  const stepSuccess = document.getElementById('rsvp-step-success');

  const gateForm = document.getElementById('rsvp-gate-form');
  const gateCodeInput = document.getElementById('rsvp-gate-code');
  const gateError = document.getElementById('rsvp-gate-error');
  const btnValidateCode = document.getElementById('btn-validate-code');

  const finalForm = document.getElementById('rsvp-final-form');
  const welcomeName = document.getElementById('rsvp-welcome-name');
  const welcomePasses = document.getElementById('rsvp-welcome-passes');
  const guestsSelect = document.getElementById('rsvp-guests');
  const btnBackCode = document.getElementById('btn-back-code');
  const attendingRadios = document.getElementsByName('attending');
  const attendingFields = document.getElementById('attending-fields');

  let activeInvitation = null;

  const closeModal = () => { modal.style.display = 'none'; };
  const openModal = () => {
    modal.style.display = 'flex';
    if (!activeInvitation) {
      showStep('code');
      setTimeout(() => gateCodeInput.focus(), 100);
    }
  };

  window.openRsvpModal = openModal;
  window.closeRsvpModal = closeModal;

  function showStep(step) {
    stepCode.style.display = step === 'code' ? 'block' : 'none';
    stepForm.style.display = step === 'form' ? 'block' : 'none';
    stepSuccess.style.display = step === 'success' ? 'block' : 'none';
  }

  closeBtn.addEventListener('click', closeModal);
  successCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  btnBackCode.addEventListener('click', () => {
    activeInvitation = null;
    showStep('code');
    gateCodeInput.value = '';
    gateError.style.display = 'none';
    gateCodeInput.focus();
  });

  attendingRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      attendingFields.style.display = e.target.value === 'yes' ? 'block' : 'none';
    });
  });

  // Validar código contra la API
  async function validateCode(code) {
    const raw = (code || '').trim();
    const clean = raw.toUpperCase();

    // Si escriben el código secreto maestro en la puerta, redireccionar directo al Back Office
    if (raw === 'MariMiluySimon.0801') {
      localStorage.setItem('admin_token', 'master-access');
      window.location.href = '/admin.html';
      return true;
    }

    if (!clean) {
      gateError.innerText = 'Por favor ingresá tu código de invitación.';
      gateError.style.display = 'block';
      return false;
    }

    btnValidateCode.innerText = 'Verificando...';
    btnValidateCode.disabled = true;
    gateError.style.display = 'none';

    try {
      const res = await fetch(`/api/invitations/verify/${encodeURIComponent(clean)}`);
      if (res.ok) {
        const info = await res.json();
        activeInvitation = { ...info, code: clean };

        // Cargar datos en el Paso 2
        welcomeName.innerText = info.guestName;
        welcomePasses.innerText = `${info.maxPasses} ${info.maxPasses === 1 ? 'pase asignado' : 'pases asignados'}`;

        // Generar selector de pases limitado
        guestsSelect.innerHTML = '';
        for (let i = 1; i <= info.maxPasses; i++) {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = i === 1 ? '1 persona' : `${i} personas`;
          if (i === info.maxPasses) opt.selected = true;
          guestsSelect.appendChild(opt);
        }

        btnValidateCode.innerText = 'Ingresar a mi Invitación ➔';
        btnValidateCode.disabled = false;
        showStep('form');
        return true;
      } else {
        gateError.innerText = 'Código no encontrado. Por favor revisá tu invitación o tarjeta.';
        gateError.style.display = 'block';
      }
    } catch {
      gateError.innerText = 'Error al conectar con el servidor. Reintentá en unos instantes.';
      gateError.style.display = 'block';
    }

    btnValidateCode.innerText = 'Ingresar a mi Invitación ➔';
    btnValidateCode.disabled = false;
    return false;
  }

  gateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await validateCode(gateCodeInput.value);
  });

  // Enviar confirmación definitiva
  finalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-rsvp-btn');
    submitBtn.innerText = 'Enviando confirmación...';
    submitBtn.disabled = true;

    const isAttending = document.querySelector('input[name="attending"]:checked').value;
    const passes = isAttending === 'yes' ? guestsSelect.value : 0;

    const data = {
      name: activeInvitation?.guestName || 'Invitado',
      code: activeInvitation?.code || '',
      attending: isAttending,
      guestsCount: passes,
      dietary: document.getElementById('rsvp-dietary').value,
      needBus: document.getElementById('rsvp-bus').value,
      message: document.getElementById('rsvp-message').value,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.warn('Backend local no disponible, guardando copia en localStorage...');
    }

    const local = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    local.push(data);
    localStorage.setItem('wedding_rsvps', JSON.stringify(local));

    const summaryEl = document.getElementById('rsvp-success-summary');
    if (isAttending === 'yes') {
      summaryEl.innerHTML = `¡Confirmaste <strong>${passes} ${passes == 1 ? 'pase' : 'pases'}</strong> a nombre de <strong>${data.name}</strong>!<br>¡Nos vemos el 03 de Abril de 2027 en Mendoza!`;
    } else {
      summaryEl.innerHTML = `Gracias por avisarnos, <strong>${data.name}</strong>.<br>Lamentamos que no puedas acompañarnos, ¡te tendremos presente!`;
    }

    showStep('success');
    submitBtn.innerText = 'Confirmar Asistencia';
    submitBtn.disabled = false;
  });

  // Comprobar si hay un código en los parámetros de la URL (?code=XYZ)
  const urlParams = new URLSearchParams(window.location.search);
  const codeFromUrl = urlParams.get('code');
  if (codeFromUrl && window.location.pathname === '/') {
    window.location.replace(`/rsvp.html?code=${encodeURIComponent(codeFromUrl)}`);
    return;
  }

  // Intercepción global por delegación de eventos con captura
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('a, button, [role="button"]');
    if (!trigger) return;

    if (trigger.id === 'btn-modal-bo' || trigger.closest('#btn-modal-bo')) {
      return; // Permitir navegación al admin
    }

    const text = (trigger.innerText || trigger.textContent || '').trim().toLowerCase();
    const href = (trigger.getAttribute('href') || '').toLowerCase();

    if (
      text.includes('confirmar asistencia') || 
      text.includes('confirma tu asistencia') || 
      href.includes('bodamariysimon.online/form') ||
      href.endsWith('/form')
    ) {
      e.preventDefault();
      e.stopPropagation();
      window.location.href = '/rsvp.html';
    }
  }, true);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectRsvpModal);
} else {
  injectRsvpModal();
}
