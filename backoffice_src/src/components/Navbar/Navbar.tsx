import React, { useState, useEffect } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { BrandLogo } from "../Brand/BrandLogo";

interface NavbarProps {
  onRsvpClick: () => void;
  onAdminClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRsvpClick, onAdminClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "La Boda", href: "#hero-section" },
    { name: "El Día", href: "#fecha" },
    { name: "Lugar", href: "#lugar" },
    { name: "Itinerario", href: "#itinerario" },
    { name: "Detalles", href: "#detalles" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl z-50 transition-all duration-300 ${
          scrolled ? "top-2 sm:top-3 scale-[0.99]" : ""
        }`}
      >
        <nav
          className="bg-white/92 backdrop-blur-md border border-black/5 rounded-[27px] px-4 sm:px-7 py-2.5 sm:py-3 shadow-[0px_1px_32px_0px_rgba(0,0,0,0.06)] flex items-center justify-between transition-all"
        >
          {/* Logo */}
          <a
            href="#hero-section"
            onClick={(e) => handleLinkClick(e, "#hero-section")}
            className="flex items-center gap-1 cursor-pointer group"
          >
            <BrandLogo fontSize="text-xl sm:text-2xl" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7 text-[13px] font-manrope font-medium text-[#151619]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#363B1F] transition-colors py-1 cursor-pointer tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onRsvpClick}
              className="bg-[#363B1F] hover:bg-[#272B15] text-[#F0F0F0] text-xs sm:text-[13px] font-bold font-manrope px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              Confirmar asistencia
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#363B1F] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-black/5 rounded-[24px] p-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-manrope text-sm font-medium text-[#151619]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-xl hover:bg-[#F1EBE3] text-left transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#626262]">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onAdminClick();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-[#626262] hover:text-[#363B1F]"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Acceso Admin
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
