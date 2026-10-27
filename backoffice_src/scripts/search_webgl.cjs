const fs = require('fs');
const code = fs.readFileSync('/tmp/framer_page.js', 'utf8');

const matches = [...code.matchAll(/new [a-zA-Z0-9_]*WebGLRenderer/g)];
console.log('WebGLRenderer instantiations:', matches.length);

for (const m of matches) {
  const i = m.index;
  console.log('Instantiation context:', code.slice(Math.max(0, i - 150), Math.min(code.length, i + 350)));
}
