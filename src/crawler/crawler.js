import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://bodamariysimon.framer.website/';
const OUTPUT_DIR = path.resolve(__dirname, '../../dist');
const ASSETS_DIR = path.resolve(OUTPUT_DIR, 'assets');

async function scrapeFramerSite() {
  console.log(`[1/4] Iniciando crawler para: ${TARGET_URL}...`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  const networkAssets = [];

  page.on('response', async (response) => {
    const url = response.url();
    const status = response.status();
    const contentType = response.headers()['content-type'] || '';

    if (status >= 200 && status < 300) {
      networkAssets.push({ url, contentType, status });
    }
  });

  console.log(`[2/4] Cargando página y esperando hidratación...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 60000 });

  // Scroll para activar lazy-loading de animaciones e imágenes
  console.log(`[3/4] Scrolleando para disparar lazy loading...`);
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  await page.waitForTimeout(2000);

  // Captura de pantalla para benchmarking visual
  const screenshotPath = path.join(OUTPUT_DIR, 'benchmark.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`[✓] Captura de pantalla guardada en: ${screenshotPath}`);

  // Extraer el HTML renderizado final
  const htmlContent = await page.content();
  const htmlPath = path.join(OUTPUT_DIR, 'index.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log(`[✓] HTML completo guardado en: ${htmlPath}`);

  // Extraer información detallada del sitio
  const pageMeta = await page.evaluate(() => {
    const title = document.title;
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p')).map(el => ({
      tag: el.tagName.toLowerCase(),
      text: el.innerText.trim(),
    })).filter(item => item.text.length > 0);

    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt || '',
      currentSrc: img.currentSrc,
    }));

    const links = Array.from(document.querySelectorAll('a')).map(a => ({
      href: a.href,
      text: a.innerText.trim(),
    }));

    return { title, headings, images, links };
  });

  const reportPath = path.join(__dirname, 'inventory.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    url: TARGET_URL,
    timestamp: new Date().toISOString(),
    meta: pageMeta,
    assetsCount: networkAssets.length,
    assets: networkAssets
  }, null, 2), 'utf-8');

  console.log(`[4/4] Reporte de inventario guardado en: ${reportPath}`);
  console.log(`\nResumen del sitio:`);
  console.log(`- Título: ${pageMeta.title}`);
  console.log(`- Elementos de texto detectados: ${pageMeta.headings.length}`);
  console.log(`- Imágenes detectadas: ${pageMeta.images.length}`);
  console.log(`- Links detectados: ${pageMeta.links.length}`);
  console.log(`- Recursos de red capturados: ${networkAssets.length}`);

  await browser.close();
}

scrapeFramerSite().catch((err) => {
  console.error('Error durante el scraping:', err);
  process.exit(1);
});

