const fs = require('fs');

const css = fs.readFileSync('./src/framer.css', 'utf8');
const html = fs.readFileSync('./src/framer_main.html', 'utf8');

// Check main wrapper classes
const mainClasses = html.match(/<div id="main"[^>]*class="([^"]+)"/)?.[1] || '';
console.log('Main classes:', mainClasses);

// Check if classes exist in css
const sampleClasses = ['framer-oargH', 'framer-yld9pv', 'framer-1nyii8o', 'framer-16fsspx', 'framer-7mjx3o', 'framer-4rc4ic'];
sampleClasses.forEach(cls => {
  console.log(`Class .${cls} in CSS:`, css.includes('.' + cls));
});
