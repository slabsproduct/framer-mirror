const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const datosMatch = html.match(/id="datos"[\s\S]*?(?=<section[^>]+id="faq")/);
if (datosMatch) {
  console.log('Saved datos HTML, length:', datosMatch[0].length);
  // find cards
  const cards = [...datosMatch[0].matchAll(/<div[^>]*data-framer-name="Service"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g)];
  console.log('Service cards found:', cards.length);
  cards.forEach((c, i) => console.log(`Card ${i}:\n`, c[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 200)));
}
