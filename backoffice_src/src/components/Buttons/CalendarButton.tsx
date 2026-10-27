import React from "react";
import { Calendar } from "lucide-react";

export const CalendarButton: React.FC = () => {
  const downloadIcs = () => {
    // 18:30 (ART - UTC-3) on 03rd Apr 2027 is 21:30 UTC
    // 05:00 (ART - UTC-3) on 04rd Apr 2027 is 08:00 UTC
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mari y Simon//Wedding Web Platform//ES",
      "BEGIN:VEVENT",
      "UID:boda-mari-simon-2026-11-21",
      "DTSTAMP:20260706T143000Z",
      "DTSTART:20261121T213000Z",
      "DTEND:20261122T080000Z",
      "SUMMARY:Boda de Mari & Simón 💍",
      "DESCRIPTION:¡Acompañanos a celebrar nuestro gran día! Ceremonia y Fiesta de Boda de Mari y Simón en Mendoza, Argentina. Recordá confirmar tu pase en la web oficial.",
      "LOCATION:La Martineta, Potrerillos, Mendoza, Argentina",
      "URL:https://boda-mari-simon.com",
      "SEQUENCE:0",
      "STATUS:CONFIRMED",
      "TRANSP:OPAQUE",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Boda_Mari_y_Simon.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={downloadIcs}
      id="btn-calendar-ics"
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-olive-dark hover:bg-olive-light border border-olive-medium/30 rounded-full font-serif italic text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
    >
      <Calendar className="w-4 h-4 text-terracotta" />
      Agendar en mi Calendario
    </button>
  );
};
