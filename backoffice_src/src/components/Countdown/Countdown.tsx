import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export const Countdown: React.FC = () => {
  // Wedding Date: April 03, 2027 at 16:00:00 (Mendoza, Argentina)
  const targetDate = new Date("2027-04-03T16:00:00");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center py-6">
      <h3 className="font-serif italic text-olive-medium text-lg mb-6 tracking-wide text-center">
        El gran día se acerca...
      </h3>
      
      <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg w-full px-2">
        {timeBlocks.map((block, idx) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm border border-gold-wedding/10 p-3 md:p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-olive-dark tracking-tight">
              {timeLeft.isOver ? "00" : String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-terracotta mt-1 md:mt-2 font-medium">
              {block.label}
            </span>
          </motion.div>
        ))}
      </div>
      
      {timeLeft.isOver && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-terracotta font-serif italic text-lg mt-6"
        >
          ¡Llegó el gran día! 🎉 Mari & Simón se casan hoy.
        </motion.p>
      )}
    </div>
  );
};
