const fs = require('fs');

const html = fs.readFileSync('/tmp/framer_site.html', 'utf8');

// Extract all <style> tags
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Found styles count:', styles.length);
fs.writeFileSync('/tmp/framer_extracted_styles.css', styles.join('\n\n/* ==================== */\n\n'));

// Extract the entire #main content
const mainMatch = html.match(/<div id="main"[\s\S]*?<\/div>\s*<script/i);
if (mainMatch) {
  console.log('Found main HTML, length:', mainMatch[0].length);
  fs.writeFileSync('/tmp/framer_main.html', mainMatch[0]);
} else {
  console.log('No #main match');
}

// Let's also inspect the page module: se3-2SIJUYB3043PhVxlwdaupu3LzIg4uS4CNC9Zlcs.DELc0mh1.mjs
