const fs = require('fs');

const html = fs.readFileSync('./src/framer_main.html', 'utf8');

const faqMatch = html.match(/id="faq"[\s\S]*$/);
if (faqMatch) {
  const faqHtml = faqMatch[0];
  console.log('FAQ HTML length:', faqHtml.length);
  // find all questions
  const questions = [...faqHtml.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Questions found:', questions);
  
  // find all answers / paragraphs
  const paragraphs = [...faqHtml.matchAll(/<p[^>]*class="[^"]*framer-text[^"]*"[^>]*>([\s\S]*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Sample paragraphs:', paragraphs.slice(0, 10));
}
