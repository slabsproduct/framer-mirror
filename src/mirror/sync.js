import fs from 'fs';

let content = fs.readFileSync('dist/index.html', 'utf-8');

// Eliminar badge "Made in Framer" y la barra de editor
content = content.replace(/<div id="__framer-badge-container">[\s\S]*?<\/div>/gi, '');
content = content.replace(/<iframe id="__framer-editorbar"[\s\S]*?<\/iframe>/gi, '');

// Inyectar controlador de RSVP y lógica modular
if (!content.includes('/src/mirror/app.js')) {
  content = content.replace('</body>', '<script type="module" src="/src/mirror/app.js"></script></body>');
}

fs.writeFileSync('index.html', content, 'utf-8');
console.log('[OK] index.html actualizado 1:1 sin el badge de Framer');
