import React from "react";
import { BrandLogo } from "../Brand/BrandLogo";
import { ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onAdminClick?: () => void;
  onRsvpClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick, onRsvpClick }) => {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5 py-14 px-6 text-center text-white/60">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        {/* Scraped Brand Logo */}
        <BrandLogo textColor="text-white" iconColor="text-white" fontSize="text-3xl" />
        
        <p className="font-manrope text-xs tracking-widest uppercase text-white/50">
          03 de Abril de 2027 • Potrerillos, Mendoza
        </p>

        {/* Heartfelt note */}
        <p className="text-xs italic text-white/50 max-w-sm font-enoway">
          "Con la bendición y el amor de nuestras familias, amigos, y nuestra perrita Milu."
        </p>

        {/* Links */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6">
          {onRsvpClick && (
            <button
              onClick={onRsvpClick}
              className="text-xs font-manrope text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Confirmar asistencia
            </button>
          )}

          {onAdminClick && (
            <button
              onClick={onAdminClick}
              className="text-xs font-manrope text-white/40 hover:text-white/80 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Panel de Administración
            </button>
          )}
        </div>

        <p className="text-[10px] font-manrope text-white/30 pt-2 flex items-center justify-center gap-1">
          Hecho con <Heart className="w-3 h-3 text-[#BE6D53]" /> para la boda de Mari & Simón
        </p>
      </div>
    </footer>
  );
};
