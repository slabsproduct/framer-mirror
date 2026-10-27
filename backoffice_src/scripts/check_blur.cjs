const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const blurMatches = [...html.matchAll(/opacity:\s*0\.001[^"']*/g)].map(m => m[0]);
console.log('Count of opacity:0.001 elements:', blurMatches.length);
console.log('Sample:', blurMatches.slice(0, 5));
