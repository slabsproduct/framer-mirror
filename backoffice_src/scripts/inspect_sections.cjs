const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const sections = [
  'hero-section',
  'intro',
  'fecha',
  'mensaje',
  'lugar',
  'cronograma',
  'datos',
  'faq'
];

sections.forEach(secId => {
  const regex = new RegExp(`(<[^>]+id="${secId}"[\\s\\S]*?)(?=<[^>]+id="(?:hero-section|intro|fecha|mensaje|lugar|cronograma|datos|faq|overlay)"|$)`, 'i');
  const match = html.match(regex);
  if (match) {
    console.log(`\n================ SECTION: #${secId} (length: ${match[1].length}) ================`);
    // Print snippet without huge SVG path details
    const cleanSnippet = match[1].slice(0, 800).replace(/<svg[\s\S]*?<\/svg>/g, '[SVG]');
    console.log(cleanSnippet);
  } else {
    console.log(`\n================ SECTION: #${secId} NOT FOUND ================`);
  }
});
