const fs = require('fs');

const html = fs.readFileSync('./scripts/framer_site.html', 'utf8');

// Find all image URLs and where they are used
const imgUses = [...html.matchAll(/(https:\/\/framerusercontent\.com\/(?:images|assets)\/[a-zA-Z0-9_\-\.]+)/g)].map(m => m[1]);
console.log('Unique asset URLs:');
console.log([...new Set(imgUses)]);
