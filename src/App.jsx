import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import DateCountdown from './components/DateCountdown';
import CelebrationMessage from './components/CelebrationMessage';
import VenueSection from './components/VenueSection';
import CardsSection from './components/CardsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import RsvpModal from './components/RsvpModal';
import { WEDDING_DATA } from './data/weddingData';

export default function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  return (
    <div className="app-container" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Barra de navegación flotante */}
      <Navbar onOpenRsvp={() => setIsRsvpOpen(true)} />

      {/* Hero con Video */}
      <Hero />

      {/* Mensaje de bienvenida */}
      <IntroSection message={WEDDING_DATA.couple.introMessage} />

      {/* Fecha y Contador en vivo */}
      <DateCountdown 
        targetDate={WEDDING_DATA.event.date}
        formattedDate={WEDDING_DATA.event.dateFormatted}
        time={WEDDING_DATA.event.time}
      />

      {/* Mensaje de celebración + Botón RSVP */}
      <CelebrationMessage 
        message={WEDDING_DATA.couple.celebrationMessage}
        onOpenRsvp={() => setIsRsvpOpen(true)}
      />

      {/* Sección del Lugar: La Martineta */}
      <VenueSection venue={WEDDING_DATA.venue} />

      {/* Tarjetas interactivas 3D: Código de vestimenta, Bus, Fotos */}
      <CardsSection cards={WEDDING_DATA.cards} />

      {/* Acordeón de Preguntas Frecuentes */}
      <FaqSection faqs={WEDDING_DATA.faqs} />

      {/* Pie de página con contacto por WhatsApp */}
      <Footer contact={WEDDING_DATA.contact} />

      {/* Modal Interactivo de Confirmación (RSVP) */}
      <RsvpModal 
        isOpen={isRsvpOpen} 
        onClose={() => setIsRsvpOpen(false)} 
      />
    </div>
  );
}
