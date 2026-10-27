import React, { useState } from "react";
import { motion } from "motion/react";
import { Wine, Sparkles, MapPin, Music, Utensils, GlassWater, Heart, Bus } from "lucide-react";
import { TimelineItem } from "../../types";

export const Timeline: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const timelineData: TimelineItem[] = [
    {
      time: "Sábado, 03 de Abril — 16:00hs",
      title: "La Ceremonia",
      description: "¡El momento más esperado! Nos daremos el sí junto a ustedes, frente a la imponente Cordillera de los Andes y el dique Potrerillos.",
      icon: "Sparkles",
    },
    {
      time: "Sábado, 03 de Abril — 17:30hs",
      title: "Cóctel de Bienvenida",
      description: "Copas arriba con los mejores Malbecs de Luján de Cuyo, mientras disfrutamos del atardecer mendocino.",
      icon: "GlassWater",
    },
    {
      time: "Sábado, 03 de Abril — 19:00hs",
      title: "Cena y Experiencias",
      description: "Una experiencia gastronómica de fuegos y sabores locales en La Martineta. Menú de pasos cuidadosamente maridado con vinos excepcionales.",
      icon: "Favorite",
    },
    {
      time: "Sábado, 03 de Abril — 21:30hs",
      title: "La Fiesta & Baile",
      description: "¡A bailar! El DJ abrirá la pista de baile, los cocktails de autor estarán listos y celebraremos toda la noche.",
      icon: "Music",
    },
    {
      time: "Sábado, 03 de Abril — 23:30hs hasta el amanecer",
      title: "El Regreso",
      description: "Servicio de transporte y traslados de regreso programados para que todos puedan disfrutar y volver de forma segura.",
      icon: "Airport Shuttle",
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Wine":
        return <Wine className="w-5 h-5 text-terracotta" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gold-wedding" />;
      case "GlassWater":
        return <GlassWater className="w-5 h-5 text-terracotta" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-olive-medium" />;
      case "Music":
        return <Music className="w-5 h-5 text-gold-wedding" />;
      case "Favorite":
      case "Heart":
      case "Hearth":
        return <Heart className="w-5 h-5 text-terracotta fill-terracotta/20" />;
      case "Airport Shuttle":
      case "Bus":
        return <Bus className="w-5 h-5 text-olive-medium" />;
      default:
        return <MapPin className="w-5 h-5 text-olive-medium" />;
    }
  };

  return (
    <div className="relative py-8 max-w-4xl mx-auto px-4">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-wedding/40 via-olive-medium/30 to-transparent transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row items-stretch ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Central dot icon */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-white border-2 border-gold-wedding flex items-center justify-center shadow-md cursor-pointer"
                  onClick={() => setActiveItem(activeItem === idx ? null : idx)}
                >
                  {getIcon(item.icon)}
                </motion.div>
              </div>

              {/* Card panel */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isLeft ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveItem(activeItem === idx ? null : idx)}
                  className="bg-white/80 backdrop-blur-xs p-5 md:p-6 rounded-2xl border border-olive-medium/10 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer text-left"
                >
                  <span className="inline-block text-[10px] md:text-xs font-mono font-semibold uppercase tracking-widest text-terracotta mb-2 bg-terracotta-light/20 px-2 py-0.5 rounded">
                    {item.time}
                  </span>
                  
                  <h4 className="font-serif font-bold text-lg md:text-xl text-olive-dark tracking-tight mb-2 hover:text-terracotta transition-colors flex items-center justify-between">
                    {item.title}
                  </h4>
                  
                  <p className="text-sm text-olive-dark/80 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-olive-light flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-olive-medium font-medium">
                    <span>
                      📍 LA MARTINETA (Potrerillos)
                    </span>
                    <span className="text-terracotta">
                      {activeItem === idx ? "Cerrar" : "Detalles"}
                    </span>
                  </div>

                  {/* Interactive Details Expand */}
                  {activeItem === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-olive-light/60 text-xs text-olive-dark/70 space-y-2 leading-relaxed"
                    >
                      {idx === 0 ? (
                        <>
                          <p><strong>Ubicación:</strong> Estancia La Martineta, Potrerillos.</p>
                          <p><strong>Puntualidad:</strong> Recomendamos llegar 15:30hs para ubicarse cómodamente.</p>
                          <p className="italic text-[11px] text-terracotta">La ceremonia religiosa dará comienzo puntual al atardecer frente a los Andes.</p>
                        </>
                      ) : idx === 1 ? (
                        <>
                          <p><strong>Espacio:</strong> Jardines de La Martineta.</p>
                          <p className="italic text-[11px] text-terracotta">Recepción con vinos mendocinos, bocados de autor y música ambiental.</p>
                        </>
                      ) : idx === 2 ? (
                        <>
                          <p><strong>Menú:</strong> Banquete a los fuegos / Opciones vegetarianas y celíacas confirmadas en el RSVP.</p>
                          <p><strong>Maridaje:</strong> Selección exclusiva de vinos y espumantes de la región.</p>
                        </>
                      ) : idx === 3 ? (
                        <>
                          <p><strong>Pista:</strong> Salón principal y aire libre con DJ y barra libre de autor.</p>
                          <p className="italic text-[11px] text-terracotta">¡Mucha música, fiesta y baile hasta que salga el sol!</p>
                        </>
                      ) : (
                        <>
                          <p><strong>Traslados:</strong> Shuttles y combis programadas hacia los principales puntos de alojamiento y ciudad.</p>
                          <p className="italic text-[11px] text-terracotta">Para que todos puedan festejar tranquilos y regresar de forma segura.</p>
                        </>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Empty placeholder on the other side */}
              <div className="hidden md:block w-[45%]"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
