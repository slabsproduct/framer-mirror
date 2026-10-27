const fs = require('fs');

const html = fs.readFileSync('/tmp/framer_site.html', 'utf8');

// Get all module scripts
const scriptMatches = [...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('--- SCRIPT MODULES ---');
console.log(scriptMatches);

// Extract text nodes inside framer elements or full body
// Let's find script type="module" content if inline
const inlineModules = [...html.matchAll(/<script type="module">([\s\S]*?)<\/script>/g)].map(m => m[1]);
console.log('--- INLINE MODULE COUNT ---', inlineModules.length);

// Let's write inline modules to a file to inspect
fs.writeFileSync('/tmp/framer_inline.js', inlineModules.join('\n\n// ---- NEXT ----\n\n'));

// Let's inspect framer entry chunk
