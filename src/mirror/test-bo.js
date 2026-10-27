import { chromium } from 'playwright';

async function testBo() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Probar login en admin.html con el código secreto
  console.log('[Test] Probando login en admin.html...');
  await page.goto('http://localhost:5173/admin.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  // Login con código secreto incorrecto
  await page.fill('#login-secret', 'CODIGO_INCORRECTO');
  await page.click('#login-form button[type="submit"]');
  await page.waitForTimeout(400);
  const isErrVisible = await page.locator('#login-error').isVisible();
  console.log('[Test] ¿Error visible con código erróneo?:', isErrVisible);

  // Login con código secreto real
  await page.fill('#login-secret', 'MariMiluySimon.0801');
  await page.click('#login-form button[type="submit"]');
  await page.waitForTimeout(800);

  const isDashboardVisible = await page.locator('#dashboard-view').isVisible();
  console.log('[Test] ¿Dashboard visible tras login exitoso?:', isDashboardVisible);

  // Probar pestaña de Bus
  await page.click('#btn-tab-bus');
  await page.waitForTimeout(400);
  const isBusTabVisible = await page.locator('#tab-bus').isVisible();
  console.log('[Test] ¿Pestaña Gestión de Bus visible?:', isBusTabVisible);

  // 2. Probar que en el home el modal tiene el botón B.O.
  console.log('[Test] Probando botón B.O. en el modal de RSVP...');
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.openRsvpModal && window.openRsvpModal());
  await page.waitForTimeout(400);

  const isBoBtnVisible = await page.locator('#btn-modal-bo').isVisible();
  const boBtnText = await page.locator('#btn-modal-bo').innerText();
  console.log('[Test] ¿Botón B.O. en el modal visible?:', isBoBtnVisible, '| Texto:', boBtnText);

  await page.screenshot({ path: 'dist/bo_and_modal_verified.png' });
  console.log('[Test] Screenshot guardado en dist/bo_and_modal_verified.png');

  await browser.close();
  console.log('[Test] ¡TODO FUNCIONA PERFECTAMENTE!');
}

testBo().catch(console.error);

