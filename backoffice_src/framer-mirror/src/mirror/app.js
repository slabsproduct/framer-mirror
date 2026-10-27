/**
 * Boda Mari & Simón — Modular Web App (Mirror)
 * Configured for https://bodamariysimon.online/boda/
 */

const CONFIG = {
  names: "Mari & Simón",
  weddingDate: new Date("2027-04-03T15:30:00-03:00"),
  venue: {
    name: "La Martineta",
    address: "RN7, Km 1089,5, Potrerillos, Mendoza, Argentina",
    wazeUrl: "https://ul.waze.com/ul?place=ChIJQyLxaHPpfZYRXVizldWYXXI&ll=-33.00214760%2C-69.17521280&navigate=yes",
    mapsUrl: "https://maps.app.goo.gl/5DypKSeZSw9CjCMF9"
  },
  assets: {
    video: "./assets/nb3n2t6YzmcN2pk4FY48RXe5Phc.mp4",
    poster: "./assets/5ILRvlYXf72kHSVHqpa3snGzjU.jpg",
    dresscode: "./assets/e46xCRfHepgef7YkuKzfZPZnCDY.jpg",
    bus: "./assets/QAKwxgTNTfzEKEe982NwhbBNEgU.jpg",
    photos: "./assets/CHtE3OgJcP9n0TFXZFlZ26TPQo.jpg"
  },
  pinterestUrl: "https://www.pinterest.com/MariAngel9/inspo-dresscode/",
  whatsappText: "¡Hola Mari y Simón! Tengo una duda sobre la boda...",
  apiUrl: "./api"
};

// Component: Navbar
function Navbar() {
  return `
    <nav class="glass-nav">
      <a href="#" class="brand-title">${CONFIG.names}</a>
      <a href="#rsvp" class="btn-rsvp">Confirmar asistencia</a>
    </nav>
  `;
}

// Component: Countdown
function Countdown() {
  return `
    <div class="countdown-grid" id="countdown-timer">
      <div class="countdown-box"><div class="countdown-num" id="cd-months">--</div><div class="countdown-label">Meses</div></div>
      <div class="countdown-box"><div class="countdown-num" id="cd-days">--</div><div class="countdown-label">Días</div></div>
      <div class="countdown-box"><div class="countdown-num" id="cd-hours">--</div><div class="countdown-label">Horas</div></div>
      <div class="countdown-box"><div class="countdown-num" id="cd-mins">--</div><div class="countdown-label">Minutos</div></div>
      <div class="countdown-box"><div class="countdown-num" id="cd-secs">--</div><div class="countdown-label">Segundos</div></div>
    </div>
  `;
}

// Component: Hero
function Hero() {
  return `
    <section class="hero" id="home">
      <video class="hero-video" autoplay muted loop playsinline poster="${CONFIG.assets.poster}">
        <source src="${CONFIG.assets.video}" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">${CONFIG.names}</h1>
        <p class="hero-subtitle">Hemos decidido comenzar un nuevo viaje juntos y nos encantaría que seas parte de esta historia que recién empieza.</p>
        <p style="font-weight: 600; margin-bottom: 24px; color: var(--color-olive);">El Sábado 03 de Abril del 2027 a las 15:30hs</p>
        ${Countdown()}
        <a href="#rsvp" class="btn-rsvp" style="padding: 12px 28px; font-size: 15px;">Confirma tu asistencia</a>
      </div>
    </section>
  `;
}

// Component: Venue / Lugar
function Venue() {
  return `
    <section class="section" id="lugar">
      <h2 class="section-title">El Lugar</h2>
      <div style="background: #fff; padding: 36px; border-radius: 24px; border: 1px solid rgba(0,0,0,0.05); text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
        <h3 style="font-family: 'Playfair Display', serif; font-size: 26px; color: var(--color-olive); margin-bottom: 8px;">${CONFIG.venue.name}</h3>
        <p style="color: #666; font-size: 15px; margin-bottom: 24px;">${CONFIG.venue.address}</p>
        <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
          <a href="${CONFIG.venue.wazeUrl}" target="_blank" rel="noopener noreferrer" class="card-btn">Ver en Waze</a>
          <a href="${CONFIG.venue.mapsUrl}" target="_blank" rel="noopener noreferrer" class="card-btn">Ver en Maps</a>
        </div>
      </div>
    </section>
  `;
}

// Component: Details / Cards
function Details() {
  return `
    <section class="section" id="detalles">
      <h2 class="section-title">A tener en cuenta</h2>
      <div class="cards-grid">
        <div class="info-card">
          <img src="${CONFIG.assets.dresscode}" alt="Código de vestimenta" class="card-img" />
          <div class="card-body">
            <h3 class="card-title">Código de vestimenta</h3>
            <p class="card-text">Elegantes sin perder la frescura. Mujeres con vestido fluido y calzado cómodo. Hombres elegantes pero relajados, pantalón de vestir o lino y camisa.</p>
            <a href="${CONFIG.pinterestUrl}" target="_blank" rel="noopener noreferrer" class="card-btn">Ver inspiración</a>
          </div>
        </div>

        <div class="info-card">
          <img src="${CONFIG.assets.bus}" alt="Bus compartido" class="card-img" />
          <div class="card-body">
            <h3 class="card-title">Bus compartido</h3>
            <p class="card-text">Pondremos a disposición un servicio de traslado para que puedan llegar y regresar cómodamente sin manejar por las curvas de montaña.</p>
            <a href="#rsvp" class="card-btn">Avisar en confirmación</a>
          </div>
        </div>

        <div class="info-card">
          <img src="${CONFIG.assets.photos}" alt="Fotos y videos" class="card-img" />
          <div class="card-body">
            <h3 class="card-title">Fotos y videos</h3>
            <p class="card-text">¡Queremos vivir este día a través de sus ojos! Creamos un álbum colaborativo para subir fotos y videos desde el viaje hasta el último baile.</p>
            <a href="#" class="card-btn">Sumate al álbum</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Component: FAQs
function Faqs() {
  const faqs = [
    { q: "¿Hasta cuándo tengo tiempo para confirmar mi asistencia?", a: "Por favor, confírmanos antes del 03 de Febrero de 2027 para coordinar menú y logística." },
    { q: "¿Cómo funciona el código único de invitación?", a: "Ingresando tu código en el portal de RSVP podrás ver tus pases reservados y detallar asistentes y dietas." },
    { q: "¿Hay estacionamiento disponible en el lugar?", a: "Sí, La Martineta cuenta con amplio estacionamiento vigilado de cortesía para todos los invitados." },
    { q: "¿Puedo solicitar traslado en el bus oficial?", a: "Sí, al confirmar tu asistencia en el portal puedes marcar si necesitas traslado desde Mendoza Centro o Chacras de Coria." }
  ];

  return `
    <section class="section" id="faqs">
      <h2 class="section-title">Preguntas Frecuentes</h2>
      <div class="faq-list">
        ${faqs.map((f, i) => `
          <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(${i})">
              <span>${f.q}</span>
              <span id="faq-icon-${i}">+</span>
            </div>
            <div class="faq-answer" id="faq-ans-${i}" style="display: none;">
              ${f.a}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// Component: WhatsApp Help
function WhatsAppHelp() {
  const url = `https://wa.me/?text=${encodeURIComponent(CONFIG.whatsappText)}`;
  return `
    <section class="section" style="text-align: center; padding-top: 20px;">
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-rsvp" style="background: #25D366; display: inline-flex; align-items: center; gap: 8px;">
        <span>¿Tienes más dudas? Contactanos al WhatsApp</span>
      </a>
    </section>
  `;
}

// Component: Footer
function Footer() {
  return `
    <footer style="text-align: center; padding: 40px 20px; color: #888; font-size: 13px; border-top: 1px solid rgba(0,0,0,0.05);">
      <p style="font-family: 'Playfair Display', serif; font-size: 16px; color: var(--color-olive); margin-bottom: 6px;">Mari & Simón • Boda 2027</p>
      <p>03 de Abril de 2027 • Potrerillos, Mendoza, Argentina</p>
    </footer>
  `;
}

// Countdown timer runner
function startCountdown() {
  function update() {
    const now = new Date();
    const diff = CONFIG.weddingDate - now;
    if (diff <= 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    const months = Math.floor(totalSeconds / (3600 * 24 * 30));
    const days = Math.floor((totalSeconds % (3600 * 24 * 30)) / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const elM = document.getElementById('cd-months');
    if (elM) {
      elM.textContent = String(months).padStart(2, '0');
      document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }
  }
  update();
  setInterval(update, 1000);
}

// FAQ toggle helper
window.toggleFaq = function(idx) {
  const ans = document.getElementById(`faq-ans-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  if (ans.style.display === 'none') {
    ans.style.display = 'block';
    icon.textContent = '−';
  } else {
    ans.style.display = 'none';
    icon.textContent = '+';
  }
};

// Main App Initialization
function initApp() {
  const root = document.getElementById('app');
  if (!root) return;

  root.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Venue()}
    ${Details()}
    ${Faqs()}
    ${WhatsAppHelp()}
    ${Footer()}
  `;

  startCountdown();
}

document.addEventListener('DOMContentLoaded', initApp);
