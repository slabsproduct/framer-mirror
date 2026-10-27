import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Key,
  Users,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Utensils,
  Heart,
  Lock,
  Bus,
  FileText,
  Sparkles,
  RotateCcw,
  Clock,
  MapPin,
  Download,
  MessageCircle
} from "lucide-react";
import { Invitation, Guest } from "../types";
import { BrandLogo } from "../components/Brand/BrandLogo";

interface RsvpProps {
  initialCode?: string;
  onAdminClick?: () => void;
}

export const RSVP: React.FC<RsvpProps> = ({ initialCode, onAdminClick }) => {
  // Navigation steps: 'auth' | 'form' | 'success'
  const [step, setStep] = useState<'auth' | 'form' | 'success'>('auth');
  const [codeInput, setCodeInput] = useState(initialCode || "");
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  
  // UI States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states (managed locally once invitation is loaded)
  const [guestsState, setGuestsState] = useState<Guest[]>([]);
  const [generalStatus, setGeneralStatus] = useState<'confirmed' | 'declined'>('confirmed');

  // Auto-validate if initialCode was passed
  useEffect(() => {
    if (initialCode && initialCode.trim()) {
      executeValidateCode(initialCode.trim().toUpperCase());
    }
  }, [initialCode]);

  const executeValidateCode = async (codeToValidate: string) => {
    if (!codeToValidate) {
      setErrorMessage("Por favor, ingresá un código.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/rsvp/${codeToValidate}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setInvitation(data.invitation);
        setGuestsState(data.invitation.guests || []);
        setGeneralStatus(data.invitation.status === 'declined' ? 'declined' : 'confirmed');
        setStep('form');
      } else {
        setErrorMessage(data.error || "Código inválido. Por favor verificá que esté bien escrito e intentalo de nuevo.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Ocurrió un error al conectar con el servidor. Intentalo de nuevo en unos momentos.");
    } finally {
      setLoading(false);
    }
  };

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    executeValidateCode(codeInput.trim().toUpperCase());
  };

  const handleGuestFieldChange = (index: number, field: keyof Guest, value: any) => {
    const updated = [...guestsState];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setGuestsState(updated);
  };

  const handleSubmitRsvp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!invitation) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    // If generalStatus is declined, set all guests to isAttending: false
    const finalGuests = guestsState.map(g => ({
      ...g,
      isAttending: generalStatus === 'declined' ? false : g.isAttending
    }));

    try {
      const response = await fetch(`/api/rsvp/${invitation.code}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          guests: finalGuests,
          status: generalStatus
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setInvitation(data.invitation);
        setStep('success');
      } else {
        setErrorMessage(data.error || "Ocurrió un error al guardar tu confirmación.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error de conexión al servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadIcs = () => {
    // 03rd Apr 2027 15:30 ART (UTC-3) -> 18:30 UTC
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mari y Simon//Boda RSVP//ES",
      "BEGIN:VEVENT",
      "UID:boda-mari-simon-2027-04-03",
      "DTSTAMP:20261018T120000Z",
      "DTSTART:20270403T183000Z",
      "DTEND:20270404T080000Z",
      "SUMMARY:Boda de Mari & Simón 💍",
      "DESCRIPTION:¡Gran día! Boda de Mariángel & Simón. Celebración en Potrerillos, Mendoza, Argentina.",
      "LOCATION:Potrerillos, Mendoza, Argentina",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Boda_Mari_y_Simon_2027.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Sample codes to ease demo testing
  const demoCodes = ["MARISIMON", "MAALWINES", "FAMILIA2026", "MILULOVER", "INVITADO123"];

  return (
    <div className="py-12 md:py-20 px-4 relative flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        
        {/* STEP 1: AUTHENTICATION VIA CODE (HOME / MAIN ACCESS) */}
        {step === 'auth' && (
          <motion.div
            key="auth-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-lg bg-white/95 backdrop-blur-xs p-8 md:p-12 rounded-3xl border border-[#363B1F]/15 shadow-[0_12px_45px_rgba(54,59,31,0.06)] text-center space-y-8 relative z-10"
          >
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <BrandLogo fontSize="text-4xl" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#363B1F]/5 border border-[#363B1F]/10 text-[#363B1F] text-[11px] font-mono uppercase tracking-widest font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#6E0D23]" />
                03 de Abril de 2027 • Mendoza
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#363B1F] tracking-tight">
                Confirmar Asistencia
              </h1>
              
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed font-manrope max-w-sm mx-auto">
                Ingresá el código de invitación que recibiste en tu tarjeta para ver tus pases reservados y personalizar los detalles de tu asistencia.
              </p>
            </div>

            {/* Input Form */}
            <form onSubmit={handleValidateCode} className="space-y-5 text-left">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="rsvp-code" className="text-xs font-mono uppercase tracking-wider text-[#363B1F] font-bold flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-[#6E0D23]" /> Código de Invitación
                  </label>
                  <span className="text-[10px] text-[#626262] font-mono">Personal & Intransferible</span>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="rsvp-code"
                    placeholder="Ej: MARISIMON"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    disabled={loading}
                    className="w-full px-5 py-4 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-2xl font-mono text-center text-xl uppercase tracking-[0.25em] font-bold text-[#363B1F] focus:outline-none focus:border-[#363B1F] focus:ring-2 focus:ring-[#363B1F]/20 transition-all placeholder:text-[#626262]/40"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
              </div>

              {/* Error block */}
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-rose-700 text-xs font-manrope animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                id="btn-validate-code"
                disabled={loading}
                className="w-full py-4 bg-[#363B1F] hover:bg-[#272B15] text-[#FAF6F2] rounded-2xl font-manrope font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Consultando invitación...
                  </>
                ) : (
                  <>
                    Ver mi Invitación <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick demo codes pills */}
            <div className="pt-2 border-t border-[#363B1F]/10 space-y-3">
              <span className="text-[10px] font-mono text-[#626262] uppercase tracking-wider block">
                ¿Querés probar con un código de demostración?
              </span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {demoCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      setCodeInput(code);
                      executeValidateCode(code);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF6F2] hover:bg-[#F1EBE3] border border-[#363B1F]/15 text-[#363B1F] text-[11px] font-mono tracking-wider transition-colors cursor-pointer"
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp button for guests */}
            <div className="pt-2 text-center">
              <a
                href={`https://wa.me/?text=${encodeURIComponent("¡Hola Mari y Simón! No recuerdo mi código de invitación para la boda, ¿me lo podrían recordar?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF6F2] hover:bg-[#F1EBE3] border border-[#363B1F]/15 text-[#363B1F] text-xs font-manrope font-semibold transition-all duration-200 cursor-pointer shadow-xs hover:border-[#363B1F]/30 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>¿No recuerdas tu código? Escríbenos al WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}

        {/* STEP 2: DYNAMIC RSVP FORM */}
        {step === 'form' && invitation && (
          <motion.div
            key="form-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-2xl bg-white/95 backdrop-blur-xs p-6 md:p-10 rounded-3xl border border-[#363B1F]/15 shadow-[0_12px_45px_rgba(54,59,31,0.06)] relative z-10"
          >
            {/* Header info */}
            <div className="border-b border-[#363B1F]/10 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E0D23] font-bold bg-[#F0D9DF]/60 px-2.5 py-0.5 rounded-full">
                    Código: {invitation.code}
                  </span>
                  <span className="text-[10px] font-mono text-[#626262]">
                    {invitation.status === 'confirmed' ? '✓ Asistencia confirmada previamente' : 'Pendiente de confirmación'}
                  </span>
                </div>
                
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#363B1F]">
                  ¡Hola {invitation.names}!
                </h2>
                <p className="text-xs sm:text-sm text-[#626262] font-manrope">
                  Tenés <strong className="text-[#363B1F] font-bold">{invitation.passes} {invitation.passes === 1 ? 'pase' : 'pases'}</strong> reservados para acompañarnos.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setStep('auth');
                    setCodeInput("");
                  }}
                  className="px-4 py-2 border border-[#363B1F]/20 text-xs font-mono text-[#363B1F] rounded-full hover:bg-[#FAF6F2] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Cambiar Código
                </button>
              </div>
            </div>

            {/* General Confirmation Toggle */}
            <form onSubmit={handleSubmitRsvp} className="space-y-8 text-left">
              
              <div className="bg-[#FAF6F2] p-5 md:p-6 rounded-2xl border border-[#363B1F]/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#363B1F] font-bold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#6E0D23]" /> ¿Nos vas a acompañar el 03 de Abril de 2027?
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGeneralStatus('confirmed')}
                    className={`py-3.5 px-4 rounded-xl font-manrope font-semibold text-xs sm:text-sm border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      generalStatus === 'confirmed'
                        ? 'bg-[#363B1F] border-[#363B1F] text-white shadow-sm ring-2 ring-[#363B1F]/30'
                        : 'bg-white border-[#363B1F]/15 text-[#363B1F] hover:bg-white/80'
                    }`}
                  >
                    <span>🎉</span> Asistiremos con gusto
                  </button>
                  <button
                    type="button"
                    onClick={() => setGeneralStatus('declined')}
                    className={`py-3.5 px-4 rounded-xl font-manrope font-semibold text-xs sm:text-sm border transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      generalStatus === 'declined'
                        ? 'bg-[#6E0D23] border-[#6E0D23] text-white shadow-sm ring-2 ring-[#6E0D23]/30'
                        : 'bg-white border-[#363B1F]/15 text-[#363B1F] hover:bg-white/80'
                    }`}
                  >
                    <span>😔</span> No podremos asistir
                  </button>
                </div>
              </div>

              {/* Dynamic Individual Guests Form */}
              {generalStatus === 'confirmed' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#363B1F]/10 pb-2">
                    <h3 className="font-serif font-bold text-lg text-[#363B1F] flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#6E0D23]" /> Detalle de Cada Asistente ({guestsState.length})
                    </h3>
                    <span className="text-[11px] font-mono text-[#626262]">Completá nombres y preferencias</span>
                  </div>

                  {guestsState.map((guest, idx) => (
                    <div
                      key={idx}
                      className="p-5 border border-[#363B1F]/15 rounded-2xl bg-[#FAF6F2]/60 space-y-4 relative"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#363B1F]/10 pb-3">
                        {/* Guest name input */}
                        <div className="w-full sm:max-w-xs space-y-1">
                          <label className="text-[10px] font-mono text-[#626262] uppercase font-bold flex items-center gap-1">
                            Pase {idx + 1} de {invitation.passes}
                          </label>
                          <input
                            type="text"
                            required={guest.isAttending}
                            value={guest.name}
                            onChange={(e) => handleGuestFieldChange(idx, "name", e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#363B1F]/20 rounded-xl text-sm font-manrope focus:outline-none focus:border-[#363B1F] focus:ring-1 focus:ring-[#363B1F]"
                            placeholder="Nombre y Apellido completo"
                          />
                        </div>

                        {/* Individual attendance checkbox toggle */}
                        <div className="flex items-center gap-2 pt-2 sm:pt-0">
                          <button
                            type="button"
                            onClick={() => handleGuestFieldChange(idx, "isAttending", !guest.isAttending)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wide border font-bold transition-all cursor-pointer ${
                              guest.isAttending
                                ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                                : 'bg-white text-[#626262] border-[#363B1F]/20 hover:bg-[#FAF6F2]'
                            }`}
                          >
                            {guest.isAttending ? "✓ CONFIRMA ASISTENCIA" : "✗ NO ASISTE"}
                          </button>
                        </div>
                      </div>

                      {/* Guest preferences (only visible if guest is attending) */}
                      {guest.isAttending && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                          {/* Dietary dropdown */}
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-[#626262] uppercase font-bold flex items-center gap-1">
                              <Utensils className="w-3.5 h-3.5 text-[#6E0D23]" /> Menú Especial / Dietas
                            </label>
                            <select
                              value={guest.dietaryRestrictions}
                              onChange={(e) => handleGuestFieldChange(idx, "dietaryRestrictions", e.target.value)}
                              className="w-full px-3 py-2.5 bg-white border border-[#363B1F]/20 rounded-xl text-xs font-manrope focus:outline-none focus:border-[#363B1F] cursor-pointer"
                            >
                              <option value="none">Menú Estándar (Tradicional)</option>
                              <option value="celiac">Menú Sin TACC (Celíaco)</option>
                              <option value="vegetarian">Menú Vegetariano</option>
                              <option value="vegan">Menú Vegano</option>
                              <option value="child">Menú Infantil</option>
                              <option value="allergy">Alérgico (especificar en notas)</option>
                            </select>
                          </div>

                          {/* Notes */}
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-mono text-[#626262] uppercase font-bold flex items-center gap-1">
                              <FileText className="w-3.5 h-3.5 text-[#6E0D23]" /> Notas o Alergias específicas
                            </label>
                            <input
                              type="text"
                              value={guest.notes || ""}
                              onChange={(e) => handleGuestFieldChange(idx, "notes", e.target.value)}
                              placeholder="Ej: Alergia a nueces / Mensaje para novios"
                              className="w-full px-3 py-2.5 bg-white border border-[#363B1F]/20 rounded-xl text-xs font-manrope focus:outline-none focus:border-[#363B1F]"
                            />
                          </div>

                          {/* Transport / Shuttle */}
                          <div className="sm:col-span-2 space-y-3 pt-3 border-t border-[#363B1F]/10">
                            <label className="flex items-center gap-2.5 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={!!guest.needsTransport}
                                onChange={(e) => {
                                  handleGuestFieldChange(idx, "needsTransport", e.target.checked);
                                  if (!e.target.checked) {
                                    handleGuestFieldChange(idx, "transportLocation", "");
                                  } else {
                                    handleGuestFieldChange(idx, "transportLocation", "Mendoza Centro (Plaza Independencia)");
                                  }
                                }}
                                className="w-4 h-4 rounded text-[#6E0D23] focus:ring-[#6E0D23] border-[#363B1F]/30 accent-[#6E0D23] cursor-pointer"
                              />
                              <span className="text-xs font-manrope font-bold text-[#363B1F] flex items-center gap-1.5">
                                <Bus className="w-3.5 h-3.5 text-[#6E0D23]" /> ¿Necesitás traslado oficial de la boda hasta Potrerillos?
                              </span>
                            </label>

                            <AnimatePresence>
                              {guest.needsTransport && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden space-y-2 pl-6"
                                >
                                  <p className="text-[10px] font-mono text-[#626262] uppercase font-bold">
                                    Punto de encuentro para salida y regreso:
                                  </p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    <button
                                      type="button"
                                      onClick={() => handleGuestFieldChange(idx, "transportLocation", "Mendoza Centro (Plaza Independencia)")}
                                      className={`px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase border transition-all text-left flex items-center justify-between cursor-pointer ${
                                        guest.transportLocation === "Mendoza Centro (Plaza Independencia)"
                                          ? "bg-[#363B1F] border-[#363B1F] text-white shadow-xs"
                                          : "bg-white border-[#363B1F]/15 text-[#363B1F] hover:bg-[#FAF6F2]"
                                      }`}
                                    >
                                      <span>Mendoza Centro</span>
                                      {guest.transportLocation === "Mendoza Centro (Plaza Independencia)" && <span>✓</span>}
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleGuestFieldChange(idx, "transportLocation", "Chacras de Coria")}
                                      className={`px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase border transition-all text-left flex items-center justify-between cursor-pointer ${
                                        guest.transportLocation === "Chacras de Coria"
                                          ? "bg-[#363B1F] border-[#363B1F] text-white shadow-xs"
                                          : "bg-white border-[#363B1F]/15 text-[#363B1F] hover:bg-[#FAF6F2]"
                                      }`}
                                    >
                                      <span>Chacras de Coria</span>
                                      {guest.transportLocation === "Chacras de Coria" && <span>✓</span>}
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Decline state summary */}
              {generalStatus === 'declined' && (
                <div className="p-6 border border-[#6E0D23]/20 bg-rose-50/50 rounded-2xl text-center space-y-2">
                  <p className="font-serif italic text-[#363B1F] text-base">
                    Lamentamos mucho que no nos puedan acompañar en Mendoza en esta ocasión.
                  </p>
                  <p className="text-xs text-[#626262] font-manrope">
                    Tus pases quedarán liberados para la organización del banquete. ¡Brindaremos a la distancia!
                  </p>
                </div>
              )}

              {/* Server errors */}
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit panel */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#363B1F]/10">
                <button
                  type="button"
                  onClick={() => setStep('auth')}
                  className="text-xs font-mono uppercase tracking-wider text-[#626262] hover:text-[#363B1F] flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Cancelar
                </button>

                <button
                  type="submit"
                  id="btn-submit-rsvp"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#363B1F] hover:bg-[#272B15] text-[#FAF6F2] font-manrope font-bold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Guardando confirmación...
                    </>
                  ) : (
                    <>
                      Enviar Confirmación <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        )}

        {/* STEP 3: SUCCESS / THANK YOU VIEW */}
        {step === 'success' && invitation && (
          <motion.div
            key="success-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-lg bg-white/95 backdrop-blur-xs p-8 md:p-12 rounded-3xl border border-[#363B1F]/15 shadow-[0_12px_45px_rgba(54,59,31,0.06)] text-center space-y-6 relative z-10"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E0D23] font-bold">
                Respuesta Registrada
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#363B1F] tracking-tight">
                {generalStatus === 'confirmed' ? "¡Los esperamos en Mendoza! 🎉" : "¡Muchas Gracias! ❤️"}
              </h2>
              <p className="text-xs sm:text-sm text-[#626262] font-manrope max-w-sm mx-auto leading-relaxed">
                {generalStatus === 'confirmed'
                  ? "Tu confirmación ha sido guardada en nuestra base de datos oficial. Nos alegra inmensamente que nos acompañes en este día tan especial."
                  : "Gracias por avisarnos con anticipación. Guardamos tu respuesta en el registro de invitados."}
              </p>
            </div>

            {/* Quick summary card */}
            <div className="p-5 bg-[#FAF6F2] border border-[#363B1F]/10 rounded-2xl text-left text-xs text-[#363B1F] space-y-2">
              <div className="flex justify-between items-center border-b border-[#363B1F]/10 pb-2">
                <span className="font-mono text-[10px] uppercase text-[#626262]">Invitación</span>
                <span className="font-mono font-bold text-[#6E0D23]">{invitation.code}</span>
              </div>
              <p><strong>Titular(es):</strong> {invitation.names}</p>
              <p><strong>Pases totales:</strong> {invitation.passes}</p>
              <p>
                <strong>Asistentes:</strong>{" "}
                {generalStatus === 'confirmed'
                  ? guestsState.filter(g => g.isAttending).map(g => g.name).join(", ") || "Ninguno"
                  : "Declinado"}
              </p>
              {generalStatus === 'confirmed' && guestsState.some(g => g.needsTransport) && (
                <p className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Bus className="w-3.5 h-3.5" /> Traslado solicitado para asistentes seleccionados.
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col gap-3">
              {generalStatus === 'confirmed' && (
                <button
                  type="button"
                  onClick={downloadIcs}
                  className="w-full py-3.5 bg-[#FAF6F2] hover:bg-[#F1EBE3] text-[#363B1F] border border-[#363B1F]/20 rounded-full font-manrope font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#6E0D23]" /> Agendar Boda en mi Calendario (.ics)
                </button>
              )}

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex-1 py-3 border border-[#363B1F]/20 text-[#363B1F] hover:bg-[#FAF6F2] rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Modificar datos
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStep('auth');
                    setCodeInput("");
                  }}
                  className="flex-1 py-3 bg-[#363B1F] hover:bg-[#272B15] text-[#FAF6F2] rounded-full font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Consultar otro código
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
