import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FlipCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        width: '100%',
        maxWidth: '360px',
        height: '480px',
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Lado Frontal (Imagen Polaroid) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '16px 16px 24px 16px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
          backfaceVisibility: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{
            width: '100%',
            height: '380px',
            borderRadius: '6px',
            overflow: 'hidden',
          }}>
            <img 
              src={card.image} 
              alt={card.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            color: '#333333',
            textAlign: 'center',
            marginTop: '12px',
          }}>
            {card.title}
          </p>
        </div>

        {/* Lado Trasero (Detalles explicativos) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px 24px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
        }}>
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '24px',
              color: 'var(--color-olive)',
              marginBottom: '16px',
              textAlign: 'center',
            }}>
              {card.title}
            </h4>

            {card.details.women ? (
              <div style={{ fontSize: '13px', lineHeight: '1.6em', color: '#444' }}>
                <p style={{ fontWeight: 700, color: 'var(--color-olive)', marginBottom: '4px' }}>Mujeres:</p>
                <p style={{ marginBottom: '10px' }}>{card.details.women}</p>
                
                <p style={{ fontWeight: 700, color: 'var(--color-olive)', marginBottom: '4px' }}>Hombres:</p>
                <p>{card.details.men}</p>
              </div>
            ) : (
              <p style={{ fontSize: '14px', lineHeight: '1.6em', color: '#444' }}>
                {card.details.info}
              </p>
            )}
          </div>

          {card.actionUrl && card.actionUrl !== '#' && (
            <a
              href={card.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--color-olive)',
                color: '#ffffff',
                padding: '10px 16px',
                borderRadius: '999px',
                fontSize: '13px',
                fontWeight: 700,
                textAlign: 'center',
                marginTop: '16px',
                display: 'block',
              }}
            >
              {card.actionText}
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function CardsSection({ cards }) {
  return (
    <section style={{
      padding: '100px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h2 style={{
          fontFamily: 'var(--font-script-alt)',
          fontSize: 'clamp(50px, 8vw, 110px)',
          color: '#ffffff',
          fontWeight: 400,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}>
          A tener en cuenta
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-olive)',
          marginTop: '8px',
          fontStyle: 'italic',
        }}>
          (Toca cada tarjeta para ver los detalles)
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        width: '100%',
        maxWidth: '1200px',
      }}>
        {cards.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
