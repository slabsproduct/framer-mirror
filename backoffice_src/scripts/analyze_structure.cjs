const fs = require('fs');

const mainHtml = fs.readFileSync('/tmp/framer_main.html', 'utf8');

// Let's strip HTML tags and see the text content in order
const textContent = mainHtml
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(t => t.trim())
  .filter(t => t.length > 0);

console.log('--- EXTRACTED TEXT STRINGS ---');
const uniqueInOrder = [];
for (const t of textContent) {
  if (uniqueInOrder[uniqueInOrder.length - 1] !== t) {
    uniqueInOrder.push(t);
  }
}
console.log(uniqueInOrder.join('\n'));

// Let's find all data-framer-name or data-component
const names = [...mainHtml.matchAll(/data-framer-name="([^"]+)"/g)].map(m => m[1]);
console.log('\n--- FRAMER ELEMENT NAMES ---');
console.log([...new Set(names)]);
