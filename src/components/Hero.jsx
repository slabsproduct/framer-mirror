import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '60px',
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '92%',
          maxWidth: '1360px',
          height: '75vh',
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
        }}
      >
        <video 
          src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
          poster="https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Gradiente sutil inferior */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 50%)',
          pointerEvents: 'none',
        }} />
      </motion.div>
    </section>
  );
}
