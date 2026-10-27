const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const fechaMatch = html.match(/id="fecha"[\s\S]*?(?=<div[^>]+id="mensaje")/);
if (fechaMatch) {
  fs.writeFileSync('./scripts/fecha_section.html', fechaMatch[0]);
  console.log('Saved fecha_section.html, length:', fechaMatch[0].length);
  // print text inside
  console.log('Text content:\n', fechaMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
}
