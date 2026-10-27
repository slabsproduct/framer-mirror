const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

// Find faq item containers
const faqItems = [...html.matchAll(/<div[^>]*data-framer-name="(?:Collapsed|Expanded)"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
console.log('FAQ items found by Collapsed/Expanded:', faqItems.length);

// Let's print the first FAQ item
const faqSection = html.match(/id="faq"[\s\S]*$/)?.[0] || '';
console.log('FAQ section sample (first 1500 chars):\n', faqSection.slice(0, 1500));
