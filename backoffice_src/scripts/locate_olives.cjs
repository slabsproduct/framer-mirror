const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const regex = /<[^>]+(?:AMQOsv9Hks9qR2eJzm8TWu9O6o|\.svg)[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Match at index', match.index, ':', match[0]);
  console.log('Context:', html.slice(Math.max(0, match.index - 200), Math.min(html.length, match.index + 300)));
}
