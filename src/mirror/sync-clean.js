import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

console.log('[Sync Clean] Directorio raíz:', ROOT_DIR);

const sourcePath = path.join(__dirname, 'source-index.html');
let html = fs.readFileSync(sourcePath, 'utf-8');

// 1. Eliminar badge "Made in Framer" y la barra del editor
html = html.replace(/<div id="__framer-badge-container">[\s\S]*?<\/div>/gi, '');
html = html.replace(/<style>#__framer-editorbar-container[\s\S]*?<\/style>/gi, '');
html = html.replace(/<style>#__framer-editorbar[\s\S]*?<\/style>/gi, '');
html = html.replace(/<div id="__framer-editorbar[\s\S]*?<\/div>/gi, '');

// 2. Asegurar que las rutas de assets y scripts apunten a la raíz para Vite y para DonWeb
html = html.replace(/href="scripts\//g, 'href="/scripts/');
html = html.replace(/src="scripts\//g, 'src="/scripts/');
html = html.replace(/href="assets\//g, 'href="/assets/');
html = html.replace(/src="assets\//g, 'src="/assets/');
html = html.replace(/href="styles\//g, 'href="/styles/');
html = html.replace(/src="styles\//g, 'src="/styles/');

// 3. Inyectar link a CSS y al controlador app.js
if (!html.includes('/src/mirror/app.js')) {
  html = html.replace('</head>', '<link rel="stylesheet" href="/src/mirror/rsvp.css"></head>');
  html = html.replace('</body>', '<script type="module" src="/src/mirror/app.js"></script></body>');
}

// 4. Guardar en raíz y dist
fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), html, 'utf-8');
const distDir = path.join(ROOT_DIR, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');

console.log('[Sync Clean] ¡index.html actualizado exitosamente con la nueva exportación 1:1!');

