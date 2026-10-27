import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: '1px solid rgba(54, 59, 31, 0.15)',
      padding: '20px 0',
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          textAlign: 'left',
          fontSize: '18px',
          fontWeight: 600,
          color: 'var(--color-olive)',
          fontFamily: 'var(--font-sans)',
          gap: '16px',
        }}
      >
        <span>{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'inline-block', fontSize: '20px' }}
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              paddingTop: '12px',
              fontSize: '15px',
              lineHeight: '1.6em',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '100px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        borderRadius: '28px',
        padding: '48px 36px',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--color-burgundy)',
            fontWeight: 700,
            marginBottom: '6px',
          }}>
            FAQs
          </p>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 42px)',
            color: 'var(--color-olive)',
            fontWeight: 400,
          }}>
            Preguntas Frecuentes
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
