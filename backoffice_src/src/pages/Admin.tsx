import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Key,
  Mail,
  Plus,
  Trash2,
  RefreshCw,
  Sparkles,
  CheckCircle,
  XCircle,
  HelpCircle,
  Info,
  ChevronRight,
  Send,
  Lock,
  Search,
  Filter,
  Download,
  Share2,
  Edit3,
  Bus,
  Utensils,
  LogOut,
  Check,
  Copy,
  ExternalLink,
  AlertCircle,
  Database,
  Server,
  HardDrive,
  FileCode
} from "lucide-react";
import { Invitation, Guest } from "../types";
import { BrandLogo } from "../components/Brand/BrandLogo";

interface AdminProps {
  onBackToRSVP: () => void;
}

interface SimulatedEmail {
  id: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

export const Admin: React.FC<AdminProps> = ({ onBackToRSVP }) => {
  // Password authentication state (persisted in sessionStorage)
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("admin_authenticated") === "true";
  });
  const [authError, setAuthError] = useState<string | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "MariMiluySimon.0801") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      setAuthError(null);
    } else {
      setAuthError("Contraseña incorrecta. Por favor verificá la clave de acceso.");
      setPasswordInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
  };

  // Data states
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [emails, setEmails] = useState<SimulatedEmail[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<'all' | 'confirmed' | 'pending' | 'declined' | 'transport' | 'dietary'>('all');

  // Create Modal state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [newNames, setNewNames] = useState("");
  const [newPasses, setNewPasses] = useState("2");

  // Edit Modal state
  const [editingInvitation, setEditingInvitation] = useState<Invitation | null>(null);
  const [editFormData, setEditFormData] = useState<{
    code: string;
    names: string;
    passes: number;
    status: 'pending' | 'confirmed' | 'declined';
    guests: Guest[];
  } | null>(null);

  // Active view tab
  const [activeTab, setActiveTab] = useState<'invitations' | 'guests' | 'emails' | 'database'>('invitations');
  const [selectedEmail, setSelectedEmail] = useState<SimulatedEmail | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [dbStatus, setDbStatus] = useState<{
    engine: string;
    compatibleWith: string[];
    sqliteFile: string;
    sqliteSize: string;
    totalInvitations: number;
    totalGuests: number;
  } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const invRes = await fetch("/api/admin/rsvps");
      const invData = await invRes.json();
      setInvitations(invData);

      const emailRes = await fetch("/api/admin/emails");
      const emailData = await emailRes.json();
      setEmails(emailData);

      const statusRes = await fetch("/api/admin/db/status").then(r => r.json()).catch(() => null);
      if (statusRes) setDbStatus(statusRes);
    } catch (err) {
      console.error(err);
      setErrorMessage("Error de conexión al obtener datos de administración.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  // Flash message helper
  const notifySuccess = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 4000);
  };

  // Handle Create
  const handleCreateInvitation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode.trim() || !newNames.trim() || !newPasses.trim()) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    setErrorMessage(null);

    try {
      const response = await fetch("/api/admin/rsvps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: newCode.trim().toUpperCase(),
          names: newNames.trim(),
          passes: parseInt(newPasses, 10)
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        notifySuccess(`Invitación creada: ${newNames} (${newCode.trim().toUpperCase()})`);
        setNewCode("");
        setNewNames("");
        setNewPasses("2");
        setShowCreateModal(false);
        fetchData();
      } else {
        setErrorMessage(data.error || "Error al crear la invitación.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error al conectar con el servidor.");
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (inv: Invitation) => {
    setEditingInvitation(inv);
    setEditFormData({
      code: inv.code,
      names: inv.names,
      passes: inv.passes,
      status: inv.status,
      guests: JSON.parse(JSON.stringify(inv.guests || []))
    });
  };

  // Save Edit
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInvitation || !editFormData) return;

    try {
      const response = await fetch(`/api/admin/rsvps/${editingInvitation.code}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        notifySuccess(`Invitación ${editFormData.code} actualizada con éxito.`);
        setEditingInvitation(null);
        setEditFormData(null);
        fetchData();
      } else {
        alert(data.error || "Error al actualizar la invitación.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al actualizar la invitación.");
    }
  };

  // Handle Delete
  const handleDeleteInvitation = async (code: string) => {
    if (!confirm(`¿Estás seguro de que querés eliminar la invitación con el código ${code}?`)) return;

    try {
      const response = await fetch(`/api/admin/rsvps/${code}`, {
        method: "DELETE"
      });

      if (response.ok) {
        notifySuccess(`Invitación ${code} eliminada.`);
        fetchData();
      } else {
        setErrorMessage("No se pudo eliminar la invitación.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Error al borrar.");
    }
  };

  // Handle Clear Emails
  const handleClearEmails = async () => {
    if (!confirm("¿Querés limpiar la bandeja de simulación de emails de la boda?")) return;

    try {
      await fetch("/api/admin/emails", {
        method: "DELETE"
      });
      setEmails([]);
      setSelectedEmail(null);
      notifySuccess("Bandeja de correos simulados vaciada.");
    } catch (err) {
      console.error(err);
    }
  };

  // Copy RSVP link
  const handleCopyLink = (code: string) => {
    const origin = window.location.origin;
    const link = `${origin}/?code=${encodeURIComponent(code)}`;
    navigator.clipboard.writeText(link);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  // Export to CSV for Wedding Planner / Catering
  const handleExportCSV = () => {
    const headers = [
      "Código",
      "Grupo / Titular",
      "Pases Totales",
      "Estado General",
      "Nro Asistente",
      "Nombre Invitado",
      "Asiste",
      "Dieta / Menú",
      "Requiere Traslado",
      "Punto de Traslado",
      "Notas",
      "Última Actualización"
    ];

    const rows: string[][] = [];

    invitations.forEach((inv) => {
      if (inv.guests && inv.guests.length > 0) {
        inv.guests.forEach((g, idx) => {
          rows.push([
            inv.code,
            `"${inv.names.replace(/"/g, '""')}"`,
            inv.passes.toString(),
            inv.status,
            (idx + 1).toString(),
            `"${g.name.replace(/"/g, '""')}"`,
            g.isAttending ? "Sí" : "No",
            `"${g.dietaryRestrictions || 'none'}"`,
            g.needsTransport ? "Sí" : "No",
            `"${g.transportLocation || ''}"`,
            `"${(g.notes || '').replace(/"/g, '""')}"`,
            inv.updatedAt ? new Date(inv.updatedAt).toLocaleString() : ""
          ]);
        });
      } else {
        rows.push([
          inv.code,
          `"${inv.names.replace(/"/g, '""')}"`,
          inv.passes.toString(),
          inv.status,
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          "-",
          inv.updatedAt ? new Date(inv.updatedAt).toLocaleString() : ""
        ]);
      }
    });

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Boda_Mari_Simon_Invitados_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Computed statistics
  const totalInvitations = invitations.length;
  const confirmedInvitations = invitations.filter(i => i.status === "confirmed").length;
  const pendingInvitations = invitations.filter(i => i.status === "pending").length;
  const declinedInvitations = invitations.filter(i => i.status === "declined").length;

  const totalGuestsAllowed = invitations.reduce((acc, curr) => acc + curr.passes, 0);
  
  const totalGuestsAttending = invitations.reduce((acc, curr) => {
    if (curr.status !== 'confirmed') return acc;
    return acc + (curr.guests?.filter(g => g.isAttending).length || 0);
  }, 0);

  const totalTransportRequired = invitations.reduce((acc, curr) => {
    if (curr.status !== 'confirmed') return acc;
    return acc + (curr.guests?.filter(g => g.isAttending && g.needsTransport).length || 0);
  }, 0);

  const specialDietaryCount = invitations.reduce((acc, curr) => {
    if (curr.status !== 'confirmed') return acc;
    return acc + (curr.guests?.filter(g => g.isAttending && g.dietaryRestrictions && g.dietaryRestrictions !== 'none').length || 0);
  }, 0);

  // Filtered invitations
  const filteredInvitations = useMemo(() => {
    return invitations.filter((inv) => {
      // Query match (code, names, or individual guest names)
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        inv.code.toLowerCase().includes(q) ||
        inv.names.toLowerCase().includes(q) ||
        inv.guests?.some(g => g.name.toLowerCase().includes(q) || (g.notes && g.notes.toLowerCase().includes(q)));

      if (!matchesQuery) return false;

      // Status filter
      if (statusFilter === 'confirmed') return inv.status === 'confirmed';
      if (statusFilter === 'pending') return inv.status === 'pending';
      if (statusFilter === 'declined') return inv.status === 'declined';
      if (statusFilter === 'transport') {
        return inv.status === 'confirmed' && inv.guests?.some(g => g.isAttending && g.needsTransport);
      }
      if (statusFilter === 'dietary') {
        return inv.status === 'confirmed' && inv.guests?.some(g => g.isAttending && g.dietaryRestrictions && g.dietaryRestrictions !== 'none');
      }

      return true;
    });
  }, [invitations, searchQuery, statusFilter]);

  // All individual guests flattened for detailed view
  const allGuests = useMemo(() => {
    const list: { guest: Guest; invitation: Invitation; index: number }[] = [];
    invitations.forEach((inv) => {
      (inv.guests || []).forEach((g, idx) => {
        list.push({ guest: g, invitation: inv, index: idx });
      });
    });
    return list;
  }, [invitations]);

  // =================== AUTHENTICATION GATEWAY ===================
  if (!isAuthenticated) {
    return (
      <div className="py-20 px-4 min-h-[80vh] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl border border-[#363B1F]/15 shadow-xl text-center space-y-6 z-10"
        >
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="p-3 bg-[#FAF6F2] rounded-2xl border border-[#363B1F]/10">
                <Lock className="w-6 h-6 text-[#6E0D23]" />
              </div>
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#363B1F] tracking-tight">
              Back Office de Reservas
            </h1>
            <p className="text-xs text-[#626262] font-manrope">
              Acceso exclusivo para Mari & Simón. Ingresá la contraseña para gestionar los invitados, pases y confirmaciones.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] uppercase tracking-wider font-mono text-[#363B1F] font-bold block">
                Contraseña de Validación
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Ingresá la clave de acceso"
                className="w-full px-4 py-3 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-sm font-manrope focus:outline-none focus:border-[#363B1F] focus:ring-1 focus:ring-[#363B1F] text-[#363B1F] transition-colors"
                autoFocus
              />
            </div>

            {authError && (
              <p className="text-xs text-[#6E0D23] font-mono font-semibold">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#363B1F] text-[#FAF6F2] rounded-xl text-xs uppercase tracking-wider font-mono font-bold hover:bg-[#272B15] transition-all duration-200 shadow-md cursor-pointer"
            >
              Ingresar al Back Office
            </button>
          </form>

          <div className="pt-4 border-t border-[#363B1F]/10">
            <button
              onClick={onBackToRSVP}
              className="text-xs font-mono text-[#626262] hover:text-[#363B1F] uppercase tracking-wider transition-colors cursor-pointer"
            >
              ← Volver a Confirmar Asistencia
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // =================== AUTHENTICATED BACK OFFICE ===================
  return (
    <div className="py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-8 font-manrope">
      
      {/* Top Banner and Quick Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#363B1F]/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E0D23] font-bold bg-[#F0D9DF]/60 px-2.5 py-0.5 rounded-full">
              Gestión Integral de Invitados
            </span>
            <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Sistema en Línea
            </span>
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-[#363B1F] mt-1">
            Back Office de Reservas
          </h1>
          <p className="text-xs sm:text-sm text-[#626262]">
            Administrá códigos de invitación, controlá asistencias en tiempo real y exportá datos de logística.
          </p>
        </div>

        {/* Global Toolbar buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#363B1F] hover:bg-[#272B15] text-[#FAF6F2] rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-4 h-4 text-emerald-300" />
            Nueva Invitación
          </button>

          <button
            onClick={handleExportCSV}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-[#FAF6F2] border border-[#363B1F]/20 text-[#363B1F] rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
            title="Exportar archivo CSV para el catering y transporte"
          >
            <Download className="w-4 h-4 text-[#6E0D23]" />
            Descargar CSV
          </button>

          <button
            onClick={fetchData}
            className="p-2.5 bg-white hover:bg-[#FAF6F2] border border-[#363B1F]/20 text-[#363B1F] rounded-xl transition-colors cursor-pointer"
            title="Actualizar datos"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#6E0D23]" : ""}`} />
          </button>

          <button
            onClick={handleLogout}
            className="p-2.5 bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 rounded-xl transition-colors cursor-pointer"
            title="Cerrar Sesión Admin"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notifications / Flash alerts */}
      {statusMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-center gap-2 shadow-xs"
        >
          <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
          <span className="font-semibold">{statusMessage}</span>
        </motion.div>
      )}

      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs flex items-center gap-2 shadow-xs"
        >
          <XCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span className="font-semibold">{errorMessage}</span>
        </motion.div>
      )}

      {/* Metrics / KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
        
        {/* Invitaciones Totales */}
        <div className="bg-white border border-[#363B1F]/10 p-4 rounded-2xl shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#626262] font-bold">Invitaciones</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-[#363B1F] mt-1">{totalInvitations}</p>
          <span className="text-[10px] text-[#626262]">{totalGuestsAllowed} pases totales</span>
        </div>

        {/* Confirmados */}
        <div className="bg-white border border-emerald-200 p-4 rounded-2xl shadow-xs bg-emerald-50/20">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold">Confirmados</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-700 mt-1">{totalGuestsAttending}</p>
          <span className="text-[10px] text-emerald-600">{confirmedInvitations} tarjetas listas</span>
        </div>

        {/* Pendientes */}
        <div className="bg-white border border-amber-200 p-4 rounded-2xl shadow-xs bg-amber-50/20">
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">Pendientes</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-700 mt-1">{pendingInvitations}</p>
          <span className="text-[10px] text-amber-600">Por responder</span>
        </div>

        {/* Declinados */}
        <div className="bg-white border border-rose-200 p-4 rounded-2xl shadow-xs bg-rose-50/20">
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 font-bold">Declinados</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-rose-700 mt-1">{declinedInvitations}</p>
          <span className="text-[10px] text-rose-600">No asisten</span>
        </div>

        {/* Traslado */}
        <div className="bg-white border border-[#363B1F]/10 p-4 rounded-2xl shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold flex items-center gap-1">
            <Bus className="w-3 h-3 text-[#6E0D23]" /> Traslados
          </span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-[#363B1F] mt-1">{totalTransportRequired}</p>
          <span className="text-[10px] text-[#626262]">Pasajeros confirmados</span>
        </div>

        {/* Dietas especiales */}
        <div className="bg-white border border-[#363B1F]/10 p-4 rounded-2xl shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E0D23] font-bold flex items-center gap-1">
            <Utensils className="w-3 h-3 text-[#6E0D23]" /> Dietas Esp.
          </span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-[#6E0D23] mt-1">{specialDietaryCount}</p>
          <span className="text-[10px] text-[#626262]">Celíacos / Veg / Alergias</span>
        </div>

      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-[#363B1F]/10 gap-2">
        <button
          onClick={() => setActiveTab('invitations')}
          className={`px-4 sm:px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 font-bold transition-all cursor-pointer ${
            activeTab === 'invitations'
              ? 'border-[#363B1F] text-[#363B1F]'
              : 'border-transparent text-[#626262] hover:text-[#363B1F]'
          }`}
        >
          Invitaciones & Códigos ({filteredInvitations.length})
        </button>
        <button
          onClick={() => setActiveTab('guests')}
          className={`px-4 sm:px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 font-bold transition-all cursor-pointer ${
            activeTab === 'guests'
              ? 'border-[#363B1F] text-[#363B1F]'
              : 'border-transparent text-[#626262] hover:text-[#363B1F]'
          }`}
        >
          Lista Detallada de Asistentes ({allGuests.length})
        </button>
        <button
          onClick={() => setActiveTab('emails')}
          className={`px-4 sm:px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'emails'
              ? 'border-[#363B1F] text-[#363B1F]'
              : 'border-transparent text-[#626262] hover:text-[#363B1F]'
          }`}
        >
          <Mail className="w-3.5 h-3.5" />
          Bandeja de Emails ({emails.length})
        </button>
        <button
          onClick={() => setActiveTab('database')}
          className={`px-4 sm:px-6 py-3 font-mono text-xs uppercase tracking-wider border-b-2 font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'database'
              ? 'border-[#363B1F] text-[#363B1F]'
              : 'border-transparent text-[#626262] hover:text-[#363B1F]'
          }`}
        >
          <Database className="w-3.5 h-3.5" />
          Base de Datos & DonWeb
        </button>
      </div>

      {/* TAB 1: INVITATIONS MANAGEMENT */}
      {activeTab === 'invitations' && (
        <div className="space-y-6">
          
          {/* Search & Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#363B1F]/10 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#626262] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por código, familia o nombre de invitado..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#FAF6F2] border border-[#363B1F]/15 rounded-xl text-xs font-manrope focus:outline-none focus:border-[#363B1F]"
              />
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'confirmed', label: 'Confirmados' },
                { id: 'pending', label: 'Pendientes' },
                { id: 'declined', label: 'Declinados' },
                { id: 'transport', label: 'Con Traslado' },
                { id: 'dietary', label: 'Dietas Esp.' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setStatusFilter(f.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                    statusFilter === f.id
                      ? 'bg-[#363B1F] text-white shadow-xs'
                      : 'bg-[#FAF6F2] text-[#626262] hover:text-[#363B1F] border border-[#363B1F]/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

          </div>

          {/* Invitations Grid / Cards */}
          {filteredInvitations.length === 0 ? (
            <div className="p-12 text-center bg-white border border-[#363B1F]/10 rounded-3xl text-[#626262] font-serif text-sm">
              No se encontraron invitaciones que coincidan con la búsqueda o filtro seleccionado.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredInvitations.map((inv) => (
                <div
                  key={inv.code}
                  className="bg-white border border-[#363B1F]/10 rounded-2xl p-5 shadow-xs hover:border-[#363B1F]/30 transition-all flex flex-col justify-between space-y-4"
                >
                  {/* Card top */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#6E0D23] bg-[#F0D9DF]/60 px-2.5 py-0.5 rounded-full">
                        {inv.code}
                      </span>
                      
                      <span className={`font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        inv.status === "confirmed"
                          ? "bg-emerald-100 text-emerald-800"
                          : inv.status === "declined"
                          ? "bg-rose-100 text-rose-800"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {inv.status === "confirmed" ? "Confirmado" : inv.status === "declined" ? "Declinado" : "Pendiente"}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#363B1F] leading-snug">
                        {inv.names}
                      </h3>
                      <p className="text-xs text-[#626262]">
                        Pases reservados: <strong className="text-[#363B1F]">{inv.passes}</strong>
                        {inv.updatedAt && (
                          <span className="ml-2 text-[10px] font-mono text-[#626262]">
                            • Modif: {new Date(inv.updatedAt).toLocaleDateString()}
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Guests breakdown */}
                    <div className="pt-2 border-t border-[#363B1F]/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-[#626262] uppercase tracking-wider block font-semibold">
                        Asistentes ({inv.guests?.length || 0}):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {inv.guests?.map((g, gi) => (
                          <div
                            key={gi}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1 ${
                              g.isAttending
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                : "bg-zinc-100 text-zinc-500 border border-zinc-200"
                            }`}
                          >
                            <span>{g.isAttending ? "✓" : "✗"}</span>
                            <span>{g.name}</span>
                            {g.dietaryRestrictions && g.dietaryRestrictions !== 'none' && (
                              <span className="text-[#6E0D23] font-bold">[{g.dietaryRestrictions}]</span>
                            )}
                            {g.needsTransport && (
                              <span className="text-sky-700">🚌</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions toolbar */}
                  <div className="pt-3 border-t border-[#363B1F]/10 flex items-center justify-between gap-2">
                    {/* Copy direct link button */}
                    <button
                      type="button"
                      onClick={() => handleCopyLink(inv.code)}
                      className="px-2.5 py-1.5 bg-[#FAF6F2] hover:bg-[#F1EBE3] border border-[#363B1F]/15 rounded-lg text-[11px] font-mono text-[#363B1F] transition-colors flex items-center gap-1 cursor-pointer"
                      title="Copiar enlace directo con este código para enviar por WhatsApp"
                    >
                      {copiedCode === inv.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#626262]" />
                          <span>Copiar Link</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1">
                      {/* Edit button */}
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(inv)}
                        className="p-1.5 bg-[#FAF6F2] hover:bg-[#F1EBE3] border border-[#363B1F]/15 rounded-lg text-[#363B1F] transition-colors cursor-pointer"
                        title="Editar invitación y asistentes"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {/* Delete button */}
                      <button
                        type="button"
                        onClick={() => handleDeleteInvitation(inv.code)}
                        className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 rounded-lg transition-colors cursor-pointer"
                        title="Eliminar invitación"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      )}

      {/* TAB 2: DETAILED GUESTS LIST (TABLE FOR CATERING / TRANSPORT) */}
      {activeTab === 'guests' && (
        <div className="bg-white rounded-3xl border border-[#363B1F]/10 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-[#363B1F]/10 flex items-center justify-between bg-[#FAF6F2]">
            <div>
              <h3 className="font-serif font-bold text-base text-[#363B1F]">
                Planilla Detallada de Asistentes Individuales ({allGuests.length})
              </h3>
              <p className="text-xs text-[#626262]">
                Detalle específico por persona para logística de mesas, catering y buses.
              </p>
            </div>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#363B1F] text-[#FAF6F2] rounded-xl text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Exportar CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-manrope">
              <thead className="bg-[#FAF6F2]/80 text-[#363B1F] font-mono uppercase text-[10px] tracking-wider border-b border-[#363B1F]/10">
                <tr>
                  <th className="py-3 px-4">Invitado / Nombre</th>
                  <th className="py-3 px-4">Familia / Código</th>
                  <th className="py-3 px-4">Asiste</th>
                  <th className="py-3 px-4">Menú / Dieta</th>
                  <th className="py-3 px-4">Traslado</th>
                  <th className="py-3 px-4">Notas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#363B1F]/5">
                {allGuests.map(({ guest, invitation, index }) => (
                  <tr key={`${invitation.code}-${index}`} className="hover:bg-[#FAF6F2]/40 transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#363B1F]">
                      {guest.name}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-[#6E0D23] font-bold">{invitation.code}</span>
                      <span className="block text-[11px] text-[#626262]">{invitation.names}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        guest.isAttending
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-rose-100 text-rose-800"
                      }`}>
                        {guest.isAttending ? "✓ Sí" : "✗ No"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {guest.dietaryRestrictions && guest.dietaryRestrictions !== 'none' ? (
                        <span className="font-mono text-[#6E0D23] bg-[#F0D9DF]/50 px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                          {guest.dietaryRestrictions}
                        </span>
                      ) : (
                        <span className="text-[#626262]">Estándar</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {guest.needsTransport ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-sky-800 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full">
                          <Bus className="w-3 h-3" /> {guest.transportLocation || "Mendoza"}
                        </span>
                      ) : (
                        <span className="text-[#626262]">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-[#626262] max-w-xs truncate">
                      {guest.notes || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SIMULATED EMAILS INBOX */}
      {activeTab === 'emails' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Email list */}
          <div className="bg-white border border-[#363B1F]/10 rounded-2xl p-4 flex flex-col justify-between h-[520px] shadow-xs">
            <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-[#363B1F]/10">
                <h3 className="font-serif font-bold text-[#363B1F] flex items-center gap-1.5 text-sm">
                  <Mail className="w-4 h-4 text-[#6E0D23]" /> Notificaciones de Confirmación
                </h3>
                <button
                  onClick={handleClearEmails}
                  disabled={emails.length === 0}
                  className="text-[10px] font-mono uppercase tracking-wider text-rose-700 hover:text-rose-900 cursor-pointer disabled:opacity-50"
                >
                  Vaciar
                </button>
              </div>

              {emails.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-[#626262] font-serif italic text-xs">
                  Ningún correo enviado todavía. <br /> Cada vez que un invitado confirme en el portal de RSVP, su notificación aparecerá aquí.
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {emails.map((email) => (
                    <div
                      key={email.id}
                      onClick={() => setSelectedEmail(email)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedEmail?.id === email.id
                          ? "bg-[#FAF6F2] border-[#363B1F] shadow-xs"
                          : "bg-white border-[#363B1F]/10 hover:border-[#363B1F]/30"
                      }`}
                    >
                      <p className="font-mono text-[9px] text-[#626262]">{new Date(email.timestamp).toLocaleTimeString()} • {new Date(email.timestamp).toLocaleDateString()}</p>
                      <p className="font-serif font-bold text-xs truncate mt-0.5 text-[#363B1F]">{email.subject}</p>
                      <p className="text-[10px] text-[#626262] truncate">Para: {email.to}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Email content preview */}
          <div className="lg:col-span-2 bg-white border border-[#363B1F]/10 rounded-2xl p-6 h-[520px] flex flex-col justify-between shadow-xs">
            {selectedEmail ? (
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="border-b border-[#363B1F]/10 pb-4 mb-4 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-[#626262]">De: <strong>boda@marisimon.com</strong></span>
                    <span className="font-mono text-[#626262]">{new Date(selectedEmail.timestamp).toLocaleString()}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#363B1F]">Asunto: {selectedEmail.subject}</p>
                  <p className="text-xs text-[#6E0D23] font-mono">Para: {selectedEmail.to}</p>
                </div>

                <div className="flex-1 overflow-y-auto bg-[#FAF6F2] text-[#363B1F] p-6 rounded-xl border border-[#363B1F]/10 font-manrope leading-relaxed whitespace-pre-line text-xs max-w-lg mx-auto w-full">
                  <div className="flex flex-col items-center border-b border-[#363B1F]/10 pb-3 mb-3 text-center">
                    <BrandLogo fontSize="text-xl" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#6E0D23] mt-1 font-bold">
                      Confirmación Oficial de Asistencia
                    </span>
                  </div>

                  <p className="text-[#363B1F]">{selectedEmail.body}</p>

                  <div className="border-t border-[#363B1F]/10 pt-3 mt-4 text-center text-[10px] text-[#626262]">
                    Boda Mari & Simón 💍 • 03 de Abril de 2027 • Potrerillos, Mendoza
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-[#626262] font-serif italic text-xs">
                Seleccioná un correo de la lista de la izquierda para ver el detalle de la confirmación despachada.
              </div>
            )}
          </div>

        </div>
      )}

      {/* TAB 4: DATABASE & DONWEB HOSTING */}
      {activeTab === 'database' && (
        <div className="space-y-6">
          {/* Database Engine Overview Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#363B1F]/10 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#363B1F]/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#363B1F]/5 border border-[#363B1F]/15 flex items-center justify-center text-[#363B1F]">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#363B1F]">
                    Motor de Base de Datos {dbStatus?.engine || 'JSON'}
                  </h3>
                  <p className="text-xs text-[#626262]">
                    Persistencia local en archivos JSON (invitations.json), sin dependencias externas y compatible nativamente con servidores DonWeb Argentina (Linux / cPanel / Node.js). Dump SQL disponible para exportación.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Conectada y Activa
                </span>
                <button
                  onClick={fetchData}
                  className="p-2 border border-[#363B1F]/15 rounded-xl hover:bg-[#FAF6F2] text-[#363B1F] cursor-pointer"
                  title="Refrescar métricas"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FAF6F2] rounded-2xl border border-[#363B1F]/10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#626262]">Archivo de datos (JSON)</p>
                <p className="font-mono font-bold text-sm text-[#363B1F] mt-1 truncate">
                  {dbStatus?.sqliteFile ? dbStatus.sqliteFile.split(/[\\/]/).pop() : 'invitations.json'}
                </p>
                <p className="text-[10px] text-[#626262] mt-0.5">Tamaño: {dbStatus?.sqliteSize || 'En disco'}</p>
              </div>

              <div className="p-4 bg-[#FAF6F2] rounded-2xl border border-[#363B1F]/10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#626262]">Invitaciones</p>
                <p className="font-serif font-bold text-2xl text-[#363B1F] mt-0.5">
                  {dbStatus?.totalInvitations || invitations.length}
                </p>
                <p className="text-[10px] text-[#626262]">Códigos asignados</p>
              </div>

              <div className="p-4 bg-[#FAF6F2] rounded-2xl border border-[#363B1F]/10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#626262]">Total Invitados</p>
                <p className="font-serif font-bold text-2xl text-[#6E0D23] mt-0.5">
                  {dbStatus?.totalGuests || allGuests.length}
                </p>
                <p className="text-[10px] text-[#626262]">Personas en lista</p>
              </div>

              <div className="p-4 bg-[#FAF6F2] rounded-2xl border border-[#363B1F]/10">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#626262]">Compatibilidad</p>
                <p className="font-mono font-bold text-xs text-[#363B1F] mt-1.5">
                  DonWeb / cPanel
                </p>
                <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">Zero-Config</p>
              </div>
            </div>

            {/* Download and Export Buttons */}
            <div className="border-t border-[#363B1F]/10 pt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#363B1F] font-bold mb-3">
                Exportación y Descarga de Datos
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/api/admin/db/download-sqlite"
                  download="invitations.json"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#363B1F] text-[#FAF6F2] rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#272B15] transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  Descargar invitations.json
                </a>

                <a
                  href="/api/admin/db/download-sql"
                  download="wedding_dump.sql"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#363B1F]/20 text-[#363B1F] rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FAF6F2] transition-colors"
                >
                  <FileCode className="w-4 h-4 text-[#6E0D23]" />
                  Descargar Dump SQL (.sql)
                </a>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#363B1F]/20 text-[#363B1F] rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#FAF6F2] transition-colors cursor-pointer"
                >
                  <HardDrive className="w-4 h-4 text-[#BE6D53]" />
                  Exportar CSV (Excel / Sheets)
                </button>
              </div>
            </div>
          </div>

          {/* DonWeb Argentina Deployment Guide */}
          <div className="bg-[#FAF6F2] p-6 sm:p-8 rounded-3xl border border-[#363B1F]/15 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6E0D23]/10 border border-[#6E0D23]/20 flex items-center justify-center text-[#6E0D23]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#363B1F]">
                  Guía de Despliegue en DonWeb Argentina
                </h4>
                <p className="text-xs text-[#626262]">
                  Dominio de destino: <strong className="text-[#363B1F]">https://bodamariysimon.online/boda/</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-manrope">
              {/* Step 1 */}
              <div className="p-4 bg-white rounded-2xl border border-[#363B1F]/10 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#363B1F] text-white flex items-center justify-center font-mono text-xs font-bold">
                  1
                </div>
                <h5 className="font-bold text-[#363B1F] text-sm">Rutas Relativas (/boda/)</h5>
                <p className="text-[#626262] leading-relaxed">
                  Ya dejamos configurado <code className="bg-[#FAF6F2] px-1 py-0.5 rounded text-[11px] font-mono text-[#6E0D23]">base: './'</code> en Vite. Esto garantiza que todos los assets, videos y fuentes carguen sin error 404 al estar alojados bajo la subcarpeta <code className="font-mono text-[#363B1F]">/boda/</code>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-white rounded-2xl border border-[#363B1F]/10 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#363B1F] text-white flex items-center justify-center font-mono text-xs font-bold">
                  2
                </div>
                <h5 className="font-bold text-[#363B1F] text-sm">Compilar el Proyecto</h5>
                <p className="text-[#626262] leading-relaxed">
                  Ejecutá <code className="bg-[#FAF6F2] px-1 py-0.5 rounded text-[11px] font-mono text-[#6E0D23]">npm run build</code>. Vite generará la carpeta <code className="font-mono text-[#363B1F]">dist/</code> con todos los scripts optimizados, CSS scrapeado de Framer y fuentes locales.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-white rounded-2xl border border-[#363B1F]/10 space-y-2">
                <div className="w-6 h-6 rounded-full bg-[#363B1F] text-white flex items-center justify-center font-mono text-xs font-bold">
                  3
                </div>
                <h5 className="font-bold text-[#363B1F] text-sm">Subir a cPanel / DonWeb</h5>
                <p className="text-[#626262] leading-relaxed">
                  Subí el contenido a tu carpeta <code className="bg-[#FAF6F2] px-1 py-0.5 rounded text-[11px] font-mono text-[#6E0D23]">public_html/boda/</code>. Si usás el selector de Node.js de DonWeb, la base SQLite funcionará directamente sin necesidad de crear servidores MySQL ni usuarios externos.
                </p>
              </div>
            </div>

            {/* Note box */}
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong>¿Preferís MySQL o MariaDB en DonWeb?</strong> Podés descargar el archivo <strong>Dump SQL</strong> con el botón superior y cargarlo en phpMyAdmin de DonWeb en un solo clic. El esquema y las tablas ya están preparadas para compatibilidad universal.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: CREATE INVITATION */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#363B1F]/15 shadow-2xl space-y-6"
          >
            <div className="flex justify-between items-start border-b border-[#363B1F]/10 pb-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#363B1F]">Crear Nueva Invitación</h3>
                <p className="text-xs text-[#626262]">Generá un código para un nuevo grupo o familia.</p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-[#626262] hover:text-[#363B1F] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateInvitation} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                  Código de Invitación (Mayúsculas)
                </label>
                <input
                  type="text"
                  placeholder="Ej: AGRELO2027"
                  required
                  value={newCode}
                  onChange={(e) => setNewCode(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl font-mono uppercase tracking-widest text-sm focus:outline-none focus:border-[#363B1F]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                  Nombre del Grupo / Tarjeta
                </label>
                <input
                  type="text"
                  placeholder="Ej: Familia Gómez & Acompañantes"
                  required
                  value={newNames}
                  onChange={(e) => setNewNames(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-sm focus:outline-none focus:border-[#363B1F]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                  Cantidad de Pases Autorizados
                </label>
                <select
                  value={newPasses}
                  onChange={(e) => setNewPasses(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-sm focus:outline-none focus:border-[#363B1F] cursor-pointer"
                >
                  <option value="1">1 Pase (Individual)</option>
                  <option value="2">2 Pases (Pareja)</option>
                  <option value="3">3 Pases</option>
                  <option value="4">4 Pases (Familia)</option>
                  <option value="5">5 Pases</option>
                  <option value="6">6 Pases</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2.5 border border-[#363B1F]/20 rounded-xl text-xs font-mono uppercase tracking-wider text-[#626262] hover:bg-[#FAF6F2] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#363B1F] text-[#FAF6F2] rounded-xl text-xs font-mono uppercase tracking-wider font-bold hover:bg-[#272B15] transition-colors cursor-pointer shadow-sm"
                >
                  Guardar Invitación
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* MODAL: EDIT INVITATION & GUESTS */}
      {editingInvitation && editFormData && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#363B1F]/15 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start border-b border-[#363B1F]/10 pb-4">
              <div>
                <span className="font-mono text-[10px] text-[#6E0D23] font-bold uppercase tracking-wider">
                  Modo Edición
                </span>
                <h3 className="font-serif font-bold text-xl text-[#363B1F]">
                  Editar Invitación: {editingInvitation.code}
                </h3>
              </div>
              <button
                onClick={() => setEditingInvitation(null)}
                className="text-[#626262] hover:text-[#363B1F] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                    Código
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.code}
                    onChange={(e) => setEditFormData({ ...editFormData, code: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl font-mono uppercase text-xs"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                    Grupo / Titular
                  </label>
                  <input
                    type="text"
                    required
                    value={editFormData.names}
                    onChange={(e) => setEditFormData({ ...editFormData, names: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                    Pases
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={editFormData.passes}
                    onChange={(e) => setEditFormData({ ...editFormData, passes: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-3 py-2 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                    Estado General
                  </label>
                  <select
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value as any })}
                    className="w-full px-3 py-2 bg-[#FAF6F2] border border-[#363B1F]/20 rounded-xl text-xs cursor-pointer"
                  >
                    <option value="pending">Pendiente</option>
                    <option value="confirmed">Confirmado</option>
                    <option value="declined">Declinado</option>
                  </select>
                </div>
              </div>

              {/* Guest list direct editor */}
              <div className="space-y-3 pt-2 border-t border-[#363B1F]/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#363B1F] font-bold">
                    Detalle de Asistentes ({editFormData.guests.length})
                  </span>
                </div>

                {editFormData.guests.map((g, gi) => (
                  <div key={gi} className="p-3 bg-[#FAF6F2] rounded-xl border border-[#363B1F]/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={g.name}
                        onChange={(e) => {
                          const updated = [...editFormData.guests];
                          updated[gi].name = e.target.value;
                          setEditFormData({ ...editFormData, guests: updated });
                        }}
                        className="px-2.5 py-1.5 bg-white border border-[#363B1F]/15 rounded-lg flex-1 text-xs"
                        placeholder="Nombre completo"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...editFormData.guests];
                          updated[gi].isAttending = !updated[gi].isAttending;
                          setEditFormData({ ...editFormData, guests: updated });
                        }}
                        className={`px-2.5 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase cursor-pointer ${
                          g.isAttending
                            ? "bg-emerald-700 text-white"
                            : "bg-zinc-200 text-zinc-600"
                        }`}
                      >
                        {g.isAttending ? "Asiste" : "No asiste"}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <select
                          value={g.dietaryRestrictions || "none"}
                          onChange={(e) => {
                            const updated = [...editFormData.guests];
                            updated[gi].dietaryRestrictions = e.target.value;
                            setEditFormData({ ...editFormData, guests: updated });
                          }}
                          className="w-full px-2 py-1 bg-white border border-[#363B1F]/15 rounded text-[11px]"
                        >
                          <option value="none">Menú Estándar</option>
                          <option value="celiac">Celíaco (Sin TACC)</option>
                          <option value="vegetarian">Vegetariano</option>
                          <option value="vegan">Vegano</option>
                          <option value="child">Infantil</option>
                          <option value="allergy">Alérgico</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <input
                          type="checkbox"
                          id={`transport-${gi}`}
                          checked={!!g.needsTransport}
                          onChange={(e) => {
                            const updated = [...editFormData.guests];
                            updated[gi].needsTransport = e.target.checked;
                            if (!e.target.checked) updated[gi].transportLocation = "";
                            else updated[gi].transportLocation = "Mendoza Centro (Plaza Independencia)";
                            setEditFormData({ ...editFormData, guests: updated });
                          }}
                          className="w-3.5 h-3.5 accent-[#6E0D23]"
                        />
                        <label htmlFor={`transport-${gi}`} className="text-[11px] text-[#363B1F] cursor-pointer">
                          Requiere Traslado
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#363B1F]/10 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingInvitation(null)}
                  className="px-4 py-2 border border-[#363B1F]/20 rounded-xl text-xs font-mono uppercase text-[#626262]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#363B1F] text-[#FAF6F2] rounded-xl text-xs font-mono uppercase font-bold hover:bg-[#272B15]"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

    </div>
  );
};
