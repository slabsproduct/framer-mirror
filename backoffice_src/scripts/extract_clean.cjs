const fs = require('fs');

const html = fs.readFileSync('./scripts/framer_site.html', 'utf8');

// 1. Extract head fonts & CSS
const fontCss = html.match(/<style data-framer-font-css>([\s\S]*?)<\/style>/i)?.[1] || '';
const allStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);

console.log('Font CSS length:', fontCss.length);
console.log('Total style tags:', allStyles.length);

// Save combined CSS to public or src
fs.writeFileSync('./src/framer.css', allStyles.join('\n\n'));
console.log('Saved ./src/framer.css');

// 2. Extract the #main div
const mainMatch = html.match(/<div id="main"[\s\S]*?<\/div>\s*<script/i);
if (mainMatch) {
  let mainContent = mainMatch[0].replace(/\s*<script$/, '');
  fs.writeFileSync('./src/framer_main.html', mainContent);
  console.log('Saved ./src/framer_main.html, length:', mainContent.length);
}
