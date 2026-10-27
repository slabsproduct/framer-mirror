const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

// Find all top-level children or direct sections inside #main
// Look for data-framer-name
const matches = [...html.matchAll(/data-framer-name="([^"]+)"/g)].map(m => m[1]);
console.log('Unique data-framer-name values:', [...new Set(matches)]);

// Find all id attributes
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
console.log('Unique IDs:', [...new Set(ids)]);

// Let's inspect the SVG icons and defs
const svgDefs = html.match(/<svg[^>]*id="svg\d+[\s\S]*?<\/svg>/g) || [];
console.log('SVG defs count:', svgDefs.length);

// Let's check the font faces in framer.css
const css = fs.readFileSync('./src/framer.css', 'utf8');
const fontFaces = [...css.matchAll(/@font-face\s*\{([^}]+)\}/g)].map(m => {
  const family = m[1].match(/font-family:\s*['"]?([^'";]+)/)?.[1];
  const src = m[1].match(/url\(([^)]+)\)/)?.[1];
  return { family, src };
});
console.log('Loaded @font-face families:', fontFaces);
