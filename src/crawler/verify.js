import { chromium } from 'playwright';

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: 'dist/local_screenshot.png', fullPage: true });
  await browser.close();
  console.log('[OK] Captura local guardada en dist/local_screenshot.png');
}

verify().catch(console.error);

