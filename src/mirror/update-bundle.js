import fs from 'fs';
import path from 'path';

const SOURCE_DIR = 'C:/Users/slabt/Downloads/detalle/framer-bodamariysimon-sharp-bundle-4k4k';
const TARGET_DIR = 'C:/Users/slabt/.gemini/antigravity/scratch/framer-mirror';

console.log('[Update Bundle] Sincronizando desde:', SOURCE_DIR);

try {
  const publicDir = path.join(TARGET_DIR, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Copiar carpetas necesarias
  const folders = ['assets', 'scripts', 'styles', 'data', 'subpages'];
  for (const f of folders) {
    const src = path.join(SOURCE_DIR, f);
    if (fs.existsSync(src)) {
      console.log(`[Update Bundle] Copiando ${f}...`);
      fs.cpSync(src, path.join(TARGET_DIR, f), { recursive: true, force: true });
      fs.cpSync(src, path.join(publicDir, f), { recursive: true, force: true });
    }
  }

  // Leer index.html
  const indexSource = path.join(SOURCE_DIR, 'index.html');
  let html = fs.readFileSync(indexSource, 'utf-8');

  // Eliminar badge "Made in Framer" y barra de editor
  html = html.replace(/<div id="__framer-badge-container">[\s\S]*?<\/div>/gi, '');
  html = html.replace(/<style>#__framer-editorbar-container[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<style>#__framer-editorbar[\s\S]*?<\/style>/gi, '');
  html = html.replace(/<div id="__framer-editorbar[\s\S]*?<\/div>/gi, '');

  // Convertir rutas relativas a absolutas para Vite dev server y static hosting
  html = html.replace(/href="scripts\//g, 'href="/scripts/');
  html = html.replace(/src="scripts\//g, 'src="/scripts/');
  html = html.replace(/href="assets\//g, 'href="/assets/');
  html = html.replace(/src="assets\//g, 'src="/assets/');
  html = html.replace(/href="styles\//g, 'href="/styles/');
  html = html.replace(/src="styles\//g, 'src="/styles/');

  // Inyectar CSS y controlador app.js
  if (!html.includes('/src/mirror/app.js')) {
    html = html.replace('</head>', '<link rel="stylesheet" href="/src/mirror/rsvp.css"></head>');
    html = html.replace('</body>', '<script type="module" src="/src/mirror/app.js"></script></body>');
  }

  fs.writeFileSync(path.join(TARGET_DIR, 'index.html'), html, 'utf-8');
  const distDir = path.join(TARGET_DIR, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');

  console.log('[Update Bundle] ¡Sincronización completada con éxito!');
} catch (err) {
  console.error('[Update Bundle Error]:', err);
  process.exit(1);
}

