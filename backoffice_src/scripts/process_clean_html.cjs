const fs = require('fs');

let html = fs.readFileSync('./src/framer_main.html', 'utf8');

// 1. Remove the olive leaves vector (.framer-11aifpr)
// Let's find and remove <div class="ssr-variant"><div class="framer-11aifpr">[\s\S]*?<\/div><\/div>
html = html.replace(/<div class="ssr-variant">\s*<div class="framer-11aifpr">[\s\S]*?<\/div>\s*<\/div>/g, '');
console.log('Olive vector removed. Current length:', html.length);

// 2. Map remote images to local /framer/
const assetMap = {
  'https://framerusercontent.com/images/g2zAgxHOdi07CztwrjrtaWDDy8.jpg': '/framer/g2zAgxHOdi07CztwrjrtaWDDy8.jpg',
  'https://framerusercontent.com/images/UoJFCbKCTkzMwIuFs399aePqRY.jpg': '/framer/UoJFCbKCTkzMwIuFs399aePqRY.jpg',
  'https://framerusercontent.com/images/itfWKdCmAoVGcsO1MAQZsF72OOE.jpg': '/framer/itfWKdCmAoVGcsO1MAQZsF72OOE.jpg',
  'https://framerusercontent.com/images/pQSIhyVSrKe5ubgcAAi5huBUI.png': '/framer/pQSIhyVSrKe5ubgcAAi5huBUI.png',
  'https://framerusercontent.com/images/usa24aZzsntM24x6YkVy7PjPqzc.jpg': '/framer/usa24aZzsntM24x6YkVy7PjPqzc.jpg',
  'https://framerusercontent.com/images/e46xCRfHepgef7YkuKzfZPZnCDY.jpg': '/framer/e46xCRfHepgef7YkuKzfZPZnCDY.jpg',
  'https://framerusercontent.com/images/QAKwxgTNTfzEKEe982NwhbBNEgU.jpg': '/framer/QAKwxgTNTfzEKEe982NwhbBNEgU.jpg',
  'https://framerusercontent.com/images/CHtE3OgJcP9n0TFXZFlZ26TPQo.jpg': '/framer/CHtE3OgJcP9n0TFXZFlZ26TPQo.jpg',
  'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg': '/framer/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
  'https://framerusercontent.com/assets/nb3n2t6YzmcN2pk4FY48RXe5Phc.mp4': '/framer/nb3n2t6YzmcN2pk4FY48RXe5Phc.mp4'
};

for (const [remote, local] of Object.entries(assetMap)) {
  html = html.split(remote).join(local);
}

// 3. Mark countdown items so they can be identified and updated
// Look for 05</span><span ...>months
html = html.replace(/(>05<\/span>\s*<span[^>]*>months<\/span>)/g, (match) => {
  return match.replace('>05<', ' data-cd="months">05<');
});
html = html.replace(/(>10<\/span>\s*<span[^>]*>days<\/span>)/g, (match) => {
  return match.replace('>10<', ' data-cd="days">10<');
});
html = html.replace(/(>20<\/span>\s*<span[^>]*>hours<\/span>)/g, (match) => {
  return match.replace('>20<', ' data-cd="hours">20<');
});
html = html.replace(/(>24<\/span>\s*<span[^>]*>minutes<\/span>)/g, (match) => {
  return match.replace('>24<', ' data-cd="minutes">24<');
});
html = html.replace(/(>03<\/span>\s*<span[^>]*>seconds<\/span>)/g, (match) => {
  return match.replace('>03<', ' data-cd="seconds">03<');
});

// 4. Mark RSVP buttons
html = html.replace(/(Confirmar asistencia|Confirma tu asistencia)/g, '$1');

// 5. Save processed HTML
fs.writeFileSync('./src/framer_clean.html', html);
console.log('Saved src/framer_clean.html successfully!');
