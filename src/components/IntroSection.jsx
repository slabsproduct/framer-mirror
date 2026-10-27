import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection({ message }) {
  return (
    <section style={{
      padding: '80px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '900px',
        }}
      >
        <h1 style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(46px, 8vw, 95px)',
          lineHeight: '1.15em',
          color: 'var(--color-olive)',
          fontWeight: 400,
          letterSpacing: '-0.5px',
        }}>
          {message}
        </h1>
      </motion.div>
    </section>
  );
}
