const fs = require('fs');

const code = fs.readFileSync('/tmp/framer_page.js', 'utf8');

// Find all motion components or animation properties
const motionMatches = [...code.matchAll(/transition:\s*\{([^}]+)\}/g)].map(m => m[1]);
console.log('--- MOTION TRANSITIONS (sample) ---');
console.log([...new Set(motionMatches)].slice(0, 20));

// Find whileHover / whileTap
const hoverMatches = [...code.matchAll(/whileHover:\s*\{([^}]+)\}/g)].map(m => m[1]);
console.log('--- HOVER STATES ---');
console.log([...new Set(hoverMatches)].slice(0, 10));

// Find variants or animate props
const animateMatches = [...code.matchAll(/variants:\s*\{([^}]+)\}/g)].map(m => m[1]);
console.log('--- VARIANTS ---');
console.log(animateMatches.slice(0, 10));

// Find color variables and CSS variables
const cssVars = [...code.matchAll(/--[a-zA-Z0-9_-]+:\s*[^;]+;/g)].map(m => m[0]);
console.log('--- CSS VARS ---');
console.log([...new Set(cssVars)]);

// Find all URLs of assets in framer_page.js
const urls = [...code.matchAll(/https:\/\/[^"'\s<>)]+/g)].map(m => m[0]);
const assetUrls = urls.filter(u => u.includes('framerusercontent.com'));
console.log('--- TOTAL FRAMER USER CONTENT URLS ---', new Set(assetUrls).size);
