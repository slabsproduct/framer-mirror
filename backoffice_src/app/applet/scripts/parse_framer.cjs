const fs = require('fs');

const html = fs.readFileSync('/tmp/framer_site.html', 'utf8');

const scriptMatches = [...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)].map(m => m[1]);
console.log('--- SCRIPT MODULES ---');
console.log(scriptMatches);

const inlineModules = [...html.matchAll(/<script type="module">([\s\S]*?)<\/script>/g)].map(m => m[1]);
console.log('--- INLINE MODULE COUNT ---', inlineModules.length);

fs.writeFileSync('scripts/framer_inline.js', inlineModules.join('\n\n// ---- NEXT ----\n\n'));
