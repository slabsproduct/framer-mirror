# Plan de migración — Back Office + RSVP + Confirmación por pase

## Contexto verificado
- El repo de referencia `slabsproduct/BO-boda-para-compartir` es **idéntico** a `backoffice_src/` ya presente en framer-mirror (Admin.tsx 1428 líneas, RSVP.tsx 672, server.ts 430). Es decir, los features deseados YA existen como código React/TS.
- La **rama principal** de framer-mirror usa otro stack:
  - Home espejo Framer: `index.html` + `src/mirror/app.js` (RSVP como modal) → **NO SE TOCA el home**.
  - Back office real servido: `admin.html` standalone vanilla JS (3 pestañas, sin KPIs) contra `src/server/server.js` (Express, JSON files: invitations.json / rsvps.json / bus_config.json).
- `backoffice/` es un stub incompleto (index.html + server.ts sin `src/`).

## Features objetivo (del repo de referencia)
1. **Back Office**: 6 KPIs, 4 pestañas (Invitaciones / Asistentes / Correos / Base de datos), grilla de tarjetas con pills de asistentes, filtros avanzados (búsqueda + status + transporte + dieta), editar invitación con detalle por invitado.
2. **Formulario RSVP**: página standalone (`?view=rsvp` o `/rsvp`), código obligatorio, pills de códigos demo, link WhatsApp, logo BrandLogo.
3. **Confirmación**: formulario por cada pase individual: nombre, dieta, notas, traslado con punto de encuentro.

## Opciones de implementación
### Opción A (recomendada): Portar el diseño del BO a `admin.html` + crear `rsvp.html` (vanilla, mismo servidor Express)
- Reescribir `admin.html` con la UI del Admin.tsx de referencia (6 KPIs, 4 tabs, grilla, pills, filtros, edición por invitado), adaptando la API a los endpoints existentes de `src/server/server.js`.
- Crear `rsvp.html` standalone replicando RSVP.tsx (código obligatorio, pills demo, WhatsApp, logo) y formularios por pase; conectar con `POST /api/rsvp` (extendiendo el payload para datos por invitado: dieta/notas/traslado).
- Cambiar el acceso RSVP del mirror de `modal → /rsvp.html` (el home visual no se modifica, solo el handler del botón).
- ✅ Mismo stack que la rama principal, sin Node extra ni build nuevo, deploy simple.

### Opción B: Montar `backoffice_src/` (React/Vite) como app separada servida desde Express
- Copiar el repo de referencia dentro de framer-mirror (ya está casi idéntico), agregar deps (motion, lucide-react, tailwind v4, tsx), build aparte y servir estático + API propia SQLite.
- ✅ Fidelidad 1:1 con lo desarrollado en AI Studio. ❌ Duplica backend (SQLite vs JSON) y suma toolchain pesado al repo raíz.

## Decisiones pendientes (confirmar antes de picar código)
1. ¿Opción A (vanilla port) u Opción B (montar el React tal cual)?
2. ¿El RSVP del home actual (modal en `app.js`) debe redirigir a la nueva página standalone, o mantener el modal y dejar la standalone solo para links directos (`/rsvp.html?code=XXX`)?
3. Persistencia: ¿seguir con los JSON de `src/server/server.js` (invitations.json/rsvps.json) o migrar a SQLite como el server.ts de referencia?
4. Los "Correos simulados" y "Base de datos (dump SQL)" de las pestañas 3 y 4 del BO de referencia: ¿se incluyen también en versión vanilla (simulada) o solo las 2 primeras pestañas?
