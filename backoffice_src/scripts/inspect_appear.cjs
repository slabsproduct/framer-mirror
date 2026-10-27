const fs = require('fs');

const html = fs.readFileSync('./scripts/framer_site.html', 'utf8');

const appearMatch = html.match(/<script type="framer\/appear" id="__framer__appearAnimationsContent">([\s\S]*?)<\/script>/);
if (appearMatch) {
  console.log('Appear animations content:');
  const data = JSON.parse(appearMatch[1]);
  console.log(JSON.stringify(data, null, 2));
} else {
  console.log('No appear animations found');
}
