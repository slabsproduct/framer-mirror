const fs = require('fs');

// Let's inspect sections by ID or data-framer-name
const html = fs.readFileSync('/tmp/framer_main.html', 'utf8');

// Find all elements with id or data-framer-name
const regex = /<(div|section|header|nav|main|footer|h1|h2|h3|p|a|button)[^>]+(id="([^"]+)"|data-framer-name="([^"]+)")/g;
let match;
const found = [];
while ((match = regex.exec(html)) !== null) {
  found.push({ tag: match[1], attr: match[2] });
}
console.log('Total identified tags:', found.length);
console.log('Sample:', found.slice(0, 30));

// Let's find all images and their attributes
const imgMatches = [...html.matchAll(/<img[^>]+>/g)].map(m => m[0]);
console.log('\n--- ALL IMAGES IN DOM (' + imgMatches.length + ') ---');
imgMatches.forEach((img, i) => {
  const src = img.match(/src="([^"]+)"/)?.[1] || '';
  const alt = img.match(/alt="([^"]+)"/)?.[1] || '';
  console.log(`${i}: alt="${alt}" src="${src}"`);
});

// Let's find all video tags
const videoMatches = [...html.matchAll(/<video[^>]*>([\s\S]*?)<\/video>/g)].map(m => m[0]);
console.log('\n--- ALL VIDEOS IN DOM (' + videoMatches.length + ') ---');
videoMatches.forEach((v, i) => console.log(`${i}: ${v}`));

// Let's find all svg tags
const svgMatches = [...html.matchAll(/<svg[^>]*>([\s\S]*?)<\/svg>/g)].map(m => m[0]);
console.log('\n--- ALL SVGS IN DOM (' + svgMatches.length + ') ---');
svgMatches.forEach((svg, i) => {
  console.log(`${i}: SVG length ${svg.length}, classes/attrs: ${svg.slice(0, 100)}`);
});
