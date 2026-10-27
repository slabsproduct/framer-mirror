import React from 'react';
import { motion } from 'framer-motion';

export default function VenueSection({ venue }) {
  return (
    <section style={{
      position: 'relative',
      padding: '100px 20px',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '36px',
      margin: '0 20px',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
    }}>
      {/* Imagen de fondo del paisaje de Potrerillos */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <img 
          src="https://framerusercontent.com/images/itfWKdCmAoVGcsO1MAQZsF72OOE.jpg?width=1376&height=768" 
          alt="Paisaje Potrerillos Mendoza"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        }} />
      </div>

      {/* Tarjeta del lugar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          borderRadius: '28px',
          padding: '36px 32px',
          maxWidth: '520px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.14)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img 
          src="https://framerusercontent.com/images/pQSIhyVSrKe5ubgcAAi5huBUI.png" 
          alt="Pin Icon"
          style={{ width: '48px', height: '48px', marginBottom: '16px' }}
        />

        <div style={{
          backgroundColor: 'var(--color-card-bg)',
          border: '1px solid var(--color-card-border)',
          borderRadius: '16px',
          padding: '16px 20px',
          width: '100%',
          marginBottom: '24px',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '32px',
            color: 'var(--color-olive)',
            marginBottom: '6px',
            fontWeight: 400,
          }}>
            {venue.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'var(--color-text-muted)',
            lineHeight: '1.5em',
          }}>
            {venue.address}
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
        }}>
          <a
            href={venue.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-olive)',
              color: '#ffffff',
              padding: '14px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-olive-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-olive)'}
          >
            {/* Waze Car SVG */}
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
              <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z"/>
            </svg>
            Ver en Waze
          </a>

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid var(--color-olive)',
              color: 'var(--color-olive)',
              padding: '14px',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(54, 59, 31, 0.06)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {/* Maps Pin SVG */}
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
              <path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"/>
            </svg>
            Ver en Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
}
