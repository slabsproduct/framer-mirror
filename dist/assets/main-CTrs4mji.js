(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),console.log(`[Framer Mirror] Inicializando controlador modular 1:1 con verificación de código y acceso B.O....`);function e(){if(document.getElementById(`custom-rsvp-modal`))return;document.body.insertAdjacentHTML(`beforeend`,`
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
  `);let e=document.getElementById(`custom-rsvp-modal`),t=document.getElementById(`close-rsvp-btn`),n=document.getElementById(`success-close-btn`),r=document.getElementById(`rsvp-step-code`),i=document.getElementById(`rsvp-step-form`),a=document.getElementById(`rsvp-step-success`),o=document.getElementById(`rsvp-gate-form`),s=document.getElementById(`rsvp-gate-code`),c=document.getElementById(`rsvp-gate-error`),l=document.getElementById(`btn-validate-code`),u=document.getElementById(`rsvp-final-form`),d=document.getElementById(`rsvp-welcome-name`),f=document.getElementById(`rsvp-welcome-passes`),p=document.getElementById(`rsvp-guests`),m=document.getElementById(`btn-back-code`),h=document.getElementsByName(`attending`),g=document.getElementById(`attending-fields`),_=null,v=()=>{e.style.display=`none`},y=()=>{e.style.display=`flex`,_||(b(`code`),setTimeout(()=>s.focus(),100))};window.openRsvpModal=y,window.closeRsvpModal=v;function b(e){r.style.display=e===`code`?`block`:`none`,i.style.display=e===`form`?`block`:`none`,a.style.display=e===`success`?`block`:`none`}t.addEventListener(`click`,v),n.addEventListener(`click`,v),e.addEventListener(`click`,t=>{t.target===e&&v()}),m.addEventListener(`click`,()=>{_=null,b(`code`),s.value=``,c.style.display=`none`,s.focus()}),h.forEach(e=>{e.addEventListener(`change`,e=>{g.style.display=e.target.value===`yes`?`block`:`none`})});async function x(e){let t=(e||``).trim(),n=t.toUpperCase();if(t===`MariMiluySimon.0801`)return localStorage.setItem(`admin_token`,`master-access`),window.location.href=`/admin.html`,!0;if(!n)return c.innerText=`Por favor ingresá tu código de invitación.`,c.style.display=`block`,!1;l.innerText=`Verificando...`,l.disabled=!0,c.style.display=`none`;try{let e=await fetch(`/api/invitations/verify/${encodeURIComponent(n)}`);if(e.ok){let t=await e.json();_={...t,code:n},d.innerText=t.guestName,f.innerText=`${t.maxPasses} ${t.maxPasses===1?`pase asignado`:`pases asignados`}`,p.innerHTML=``;for(let e=1;e<=t.maxPasses;e++){let n=document.createElement(`option`);n.value=e,n.textContent=e===1?`1 persona`:`${e} personas`,e===t.maxPasses&&(n.selected=!0),p.appendChild(n)}return l.innerText=`Ingresar a mi Invitación ➔`,l.disabled=!1,b(`form`),!0}c.innerText=`Código no encontrado. Por favor revisá tu invitación o tarjeta.`,c.style.display=`block`}catch{c.innerText=`Error al conectar con el servidor. Reintentá en unos instantes.`,c.style.display=`block`}return l.innerText=`Ingresar a mi Invitación ➔`,l.disabled=!1,!1}o.addEventListener(`submit`,async e=>{e.preventDefault(),await x(s.value)}),u.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`submit-rsvp-btn`);t.innerText=`Enviando confirmación...`,t.disabled=!0;let n=document.querySelector(`input[name="attending"]:checked`).value,r=n===`yes`?p.value:0,i={name:_?.guestName||`Invitado`,code:_?.code||``,attending:n,guestsCount:r,dietary:document.getElementById(`rsvp-dietary`).value,needBus:document.getElementById(`rsvp-bus`).value,message:document.getElementById(`rsvp-message`).value,timestamp:new Date().toISOString()};try{await fetch(`/api/rsvp`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(i)})}catch{console.warn(`Backend local no disponible, guardando copia en localStorage...`)}let a=JSON.parse(localStorage.getItem(`wedding_rsvps`)||`[]`);a.push(i),localStorage.setItem(`wedding_rsvps`,JSON.stringify(a));let o=document.getElementById(`rsvp-success-summary`);o.innerHTML=n===`yes`?`¡Confirmaste <strong>${r} ${r==1?`pase`:`pases`}</strong> a nombre de <strong>${i.name}</strong>!<br>¡Nos vemos el 03 de Abril de 2027 en Mendoza!`:`Gracias por avisarnos, <strong>${i.name}</strong>.<br>Lamentamos que no puedas acompañarnos, ¡te tendremos presente!`,b(`success`),t.innerText=`Confirmar Asistencia`,t.disabled=!1});let S=new URLSearchParams(window.location.search).get(`code`);S&&(s.value=S.toUpperCase(),x(S).then(e=>{e&&setTimeout(y,600)})),document.addEventListener(`click`,e=>{let t=e.target.closest(`a, button, [role="button"]`);if(!t||t.id===`btn-modal-bo`||t.closest(`#btn-modal-bo`))return;let n=(t.innerText||t.textContent||``).trim().toLowerCase(),r=(t.getAttribute(`href`)||``).toLowerCase();(n.includes(`confirmar asistencia`)||n.includes(`confirma tu asistencia`)||r.includes(`bodamariysimon.online/form`)||r.endsWith(`/form`))&&(e.preventDefault(),e.stopPropagation(),y())},!0)}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,e):e();