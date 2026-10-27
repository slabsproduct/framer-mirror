import React from 'react';
import { motion } from 'framer-motion';

export default function CelebrationMessage({ message, onOpenRsvp }) {
  return (
    <section style={{
      padding: '90px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '960px', marginBottom: '40px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(44px, 7.5vw, 86px)',
          lineHeight: '1.2em',
          color: 'var(--color-olive)',
          fontWeight: 400,
        }}>
          {message}
        </h2>
      </motion.div>

      <motion.button
        onClick={onOpenRsvp}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          backgroundColor: 'var(--color-burgundy)',
          color: 'var(--color-offwhite)',
          padding: '16px 36px',
          borderRadius: '999px',
          fontSize: '17px',
          fontWeight: 700,
          fontFamily: 'var(--font-sans)',
          cursor: 'pointer',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 8px 24px rgba(110, 13, 35, 0.25)',
        }}
      >
        Confirma tu asistencia
      </motion.button>
    </section>
  );
}
