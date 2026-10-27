const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const navMatch = html.match(/<div[^>]*data-framer-name="Navbar"[\s\S]*?(?=<header[^>]+id="hero-section")/);
if (navMatch) {
  console.log('Navbar length:', navMatch[0].length);
  console.log('Navbar HTML snippet:\n', navMatch[0].slice(0, 1000));
}
