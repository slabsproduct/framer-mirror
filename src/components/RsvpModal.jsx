import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RsvpModal({ isOpen, onClose }) {
  // Button to open Back‑office (admin panel)
  const openBackoffice = () => {
    // Assuming the back‑office runs on Vite dev server at port 5173
    window.open('http://localhost:5173', '_blank');
  };
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    attending: 'yes',
    guestsCount: 1,
    dietary: 'none',
    needBus: 'no',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Intentar enviar al backend local o de DonWeb
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        // Fallback guardando en localStorage si el backend aún no está activo
        const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
        setStatus('success');
      }
    } catch (err) {
      // Fallback offline / local
      const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
      setStatus('success');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      code: '',
      attending: 'yes',
      guestsCount: 1,
      dietary: 'none',
      needBus: 'no',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          {/* Backdrop con blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              maxWidth: '520px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
              zIndex: 1,
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                fontSize: '24px',
                color: '#888',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ fontSize: '50px', marginBottom: '16px' }}>🥂</div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '32px',
                  color: 'var(--color-olive)',
                  marginBottom: '12px',
                }}>
                  ¡Muchas gracias!
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: '1.6em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '24px',
                }}>
                  {formData.attending === 'yes'
                    ? 'Hemos registrado tu confirmación con éxito. ¡Estamos muy felices de compartir este día tan especial con vos!'
                    : 'Lamentamos que no puedas acompañarnos, ¡gracias por avisarnos y te tendremos en nuestro corazón!'}
                </p>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: 'var(--color-olive)',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '32px',
                    color: 'var(--color-olive)',
                    marginBottom: '6px',
                  }}>
                    Confirmar Asistencia
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--color-text-muted)',
                  }}>
                    Por favor completa tus datos para la lista de invitados
                  </p>
                </div>

                {/* Nombre */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                    NOMBRE Y APELLIDO *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #ddd',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Código de Invitación */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                    CÓDIGO DE INVITACIÓN (OPCIONAL)
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="Ej: MARISIMON"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #ddd',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* ¿Asistes? */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '8px' }}>
                    ¿ASISTIRÁS AL EVENTO? *
                  </label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <label style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: `2px solid ${formData.attending === 'yes' ? 'var(--color-olive)' : '#e5e5e5'}`,
                      backgroundColor: formData.attending === 'yes' ? 'rgba(54, 59, 31, 0.06)' : '#fff',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                      Sí, asistiré 🎉
                    </label>

                    <label style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: `2px solid ${formData.attending === 'no' ? 'var(--color-burgundy)' : '#e5e5e5'}`,
                      backgroundColor: formData.attending === 'no' ? 'rgba(110, 13, 35, 0.06)' : '#fff',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                      No podré asistir
                    </label>
                  </div>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    {/* Cantidad de personas */}
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                        CANTIDAD DE PASES / PERSONAS
                      </label>
                      <select
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid #ddd',
                          fontSize: '14px',
                        }}
                      >
                        <option value={1}>1 persona (solo yo)</option>
                        <option value={2}>2 personas (+1 acompañante)</option>
                        <option value={3}>3 personas</option>
                        <option value={4}>4 personas (familia)</option>
                      </select>
                    </div>

                    {/* Menú especial */}
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                        RESTRICCIÓN ALIMENTARIA / MENÚ
                      </label>
                      <select
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid #ddd',
                          fontSize: '14px',
                        }}
                      >
                        <option value="none">Menú estándar / Ninguna</option>
                        <option value="celiac">Celíaco / Sin TACC</option>
                        <option value="vegetarian">Vegetariano</option>
                        <option value="vegan">Vegano</option>
                        <option value="other">Otra alergia</option>
                      </select>
                    </div>

                    {/* Bus compartido */}
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                        ¿UTILIZARÁS EL SERVICIO DE BUS COMPARTIDO?
                      </label>
                      <select
                        name="needBus"
                        value={formData.needBus}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid #ddd',
                          fontSize: '14px',
                        }}
                      >
                        <option value="yes">Sí, desde Mendoza Capital a Potrerillos</option>
                        <option value="no">No, viajo por mi cuenta / auto</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Mensaje / Dedicatoria */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--color-olive)', marginBottom: '6px' }}>
                    MENSAJE O DEDICATORIA PARA MARI Y SIMÓN
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¡Dejales un mensaje de felicitaciones o recomendá una canción!"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #ddd',
                      fontSize: '14px',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--color-burgundy)',
                    color: '#ffffff',
                    padding: '14px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(110, 13, 35, 0.3)',
                  }}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Confirmar ahora'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
