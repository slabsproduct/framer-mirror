import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home } from "./pages/Home";
import { RSVP } from "./pages/RSVP";
import { Admin } from "./pages/Admin";
import { BrandLogo } from "./components/Brand/BrandLogo";
import { Lock, ArrowLeft, Menu, X } from "lucide-react";

type ViewState = 'home' | 'rsvp' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("view") === "admin") return "admin";
    if (params.get("view") === "rsvp" || params.get("code")) return "rsvp";
    return "home";
  });

  const [initialCode, setInitialCode] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code") || "";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Keep URL updated smoothly without reloading
  const switchView = (view: ViewState, code?: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    if (code) setInitialCode(code);

    const url = new URL(window.location.href);
    if (view === 'admin') {
      url.searchParams.set("view", "admin");
    } else if (view === 'rsvp') {
      url.searchParams.set("view", "rsvp");
      if (code) url.searchParams.set("code", code);
    } else {
      url.searchParams.delete("view");
      url.searchParams.delete("code");
    }
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const navLinks = [
    { name: "La Boda", href: "#hero-section" },
    { name: "Lugar", href: "#lugar" },
    { name: "Itinerario", href: "#itinerario" },
    { name: "Detalles", href: "#detalles" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-canvas-paper text-[#151619] selection:bg-[#F0D9DF] selection:text-[#6E0D23]">
      
      {/* 1. TOP NAVIGATION BAR (Displayed on RSVP and Admin views for smooth navigation back to Home) */}
      {currentView !== 'home' && (
        <header className="sticky top-0 z-50 bg-[#FAF6F2]/90 backdrop-blur-md border-b border-[#363B1F]/10 px-4 sm:px-8 py-3 transition-all">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div 
              onClick={() => switchView('home')}
              className="flex items-center gap-3 cursor-pointer group"
              title="Ir al inicio de la boda"
            >
              <BrandLogo fontSize="text-2xl sm:text-3xl" />
              <div className="hidden sm:block border-l border-[#363B1F]/20 pl-3">
                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-[#6E0D23] font-bold">
                  03 Abril 2027 • Mendoza
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => switchView('home')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FAF6F2] border border-[#363B1F]/20 text-[#363B1F] text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Web</span>
            </button>
          </div>
        </header>
      )}

      {/* 2. MAIN VIEWS ROUTER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Home 
                onRsvpClick={() => switchView('rsvp')}
                onAdminClick={() => switchView('admin')}
              />
            </motion.div>
          )}

          {currentView === 'rsvp' && (
            <motion.div
              key="rsvp-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <RSVP 
                initialCode={initialCode}
              />
            </motion.div>
          )}

          {currentView === 'admin' && (
            <motion.div
              key="admin-view"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35 }}
            >
              <Admin onBackToRSVP={() => switchView('rsvp')} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 3. MINIMALIST FOOTER */}
      <footer className="bg-[#FAF6F2]/70 backdrop-blur-xs border-t border-[#363B1F]/10 py-6 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#626262] font-manrope">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#363B1F]">Mari & Simón</span>
            <span>•</span>
            <span className="text-[11px] text-[#626262]">03 de Abril de 2027 • Potrerillos, Mendoza</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => switchView('home')}
              className={`hover:text-[#363B1F] cursor-pointer transition-colors ${
                currentView === 'home' ? "font-bold text-[#363B1F]" : ""
              }`}
            >
              Inicio
            </button>
            <span>•</span>
            <button
              onClick={() => switchView('rsvp')}
              className={`hover:text-[#363B1F] cursor-pointer transition-colors ${
                currentView === 'rsvp' ? "font-bold text-[#363B1F]" : ""
              }`}
            >
              Confirmar Asistencia
            </button>
            <span>•</span>
            <button
              onClick={() => switchView('admin')}
              className={`hover:text-[#6E0D23] cursor-pointer transition-colors flex items-center gap-1 text-[11px] font-mono ${
                currentView === 'admin' ? "font-bold text-[#6E0D23]" : "opacity-50 hover:opacity-100"
              }`}
              title="Acceso B.O."
            >
              <Lock className="w-3 h-3 text-[#6E0D23]" /> B.O.
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
