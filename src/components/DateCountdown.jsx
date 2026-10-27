import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DateCountdown({ targetDate, formattedDate, time }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      // Cálculo aproximado de meses (30 días por mes)
      const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      timeLeft = { months, days, hours, minutes, seconds };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Meses', value: timeLeft.months },
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <section style={{
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* Ilustración de fondo */}
      <div style={{
        position: 'relative',
        maxWidth: '380px',
        width: '100%',
        marginBottom: '24px',
      }}>
        <img 
          src="https://framerusercontent.com/images/fdqYjQT3GiM8q9ZgZ7Faj4I8o.svg" 
          alt="Ilustración Boda"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '40px' }}
      >
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(20px, 3vw, 28px)',
          color: 'var(--color-olive)',
          marginBottom: '8px',
        }}>
          El Sábado
        </p>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(32px, 5vw, 54px)',
          color: 'var(--color-burgundy)',
          fontWeight: 400,
          margin: '6px 0',
        }}>
          {formattedDate.replace('Sábado ', '')}
        </h2>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(20px, 3vw, 28px)',
          color: 'var(--color-olive)',
        }}>
          a las {time}
        </p>
      </motion.div>

      {/* Temporizador Countdown */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '14px',
          width: '100%',
          maxWidth: '850px',
        }}
      >
        {units.map((unit, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '16px 24px',
              minWidth: '105px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 42px)',
              color: 'var(--color-burgundy)',
              lineHeight: '1em',
              marginBottom: '6px',
            }}>
              {String(unit.value).padStart(2, '0')}
            </span>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '13px',
              color: 'var(--color-burgundy)',
              textTransform: 'capitalize',
              letterSpacing: '0.5px',
            }}>
              {unit.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
