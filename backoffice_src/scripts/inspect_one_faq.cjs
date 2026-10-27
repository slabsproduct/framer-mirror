const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const m = html.match(/<div[^>]*data-framer-name="(?:Collapsed|Expanded)"[\s\S]*?(?=<div[^>]*data-framer-name="(?:Collapsed|Expanded)"|id="overlay"|$)/);
if (m) {
  console.log('Sample FAQ item length:', m[0].length);
  console.log('Sample FAQ item HTML:\n', m[0].slice(0, 1000));
}
