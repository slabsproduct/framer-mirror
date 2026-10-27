const fs = require('fs');

const html = fs.readFileSync('/tmp/framer_site.html', 'utf8');

// Find all URLs
const urls = [...html.matchAll(/https:\/\/[^"'\s<>]+/g)].map(m => m[0]);
const framerScripts = urls.filter(u => (u.includes('framerusercontent.com') || u.includes('framer.website')) && (u.endsWith('.js') || u.endsWith('.mjs') || u.includes('.mjs?') || u.includes('.js?')));
console.log('Framer JS modules count:', framerScripts.length);
console.log('Framer JS modules:', framerScripts.slice(0, 10));

const media = urls.filter(u => u.match(/\.(jpg|jpeg|png|webp|svg|mp4|webm|gif)/i));
console.log('\nMedia URLs count:', [...new Set(media)].length);
console.log('Media URLs:', [...new Set(media)]);

// Let's inspect the HTML body content
console.log('\nBody length:', html.length);

// Let's search for text strings in html
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  console.log('Body snippet:', bodyMatch[1].slice(0, 500));
}
