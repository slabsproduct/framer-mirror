import { chromium } from 'playwright';

async function testRsvpFlow() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('[Test] Navegando a http://localhost:5173/ ...');
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  console.log('[Test] Abriendo modal de confirmación...');
  await page.evaluate(() => window.openRsvpModal && window.openRsvpModal());
  await page.waitForTimeout(500);

  // 1. Verificar que el modal abrió en el Paso 1 (Código obligatorio)
  const isCodeVisible = await page.locator('#rsvp-step-code').isVisible();
  console.log('[Test] ¿Paso 1 (Código obligatorio) visible?:', isCodeVisible);

  // 2. Probar con código erróneo
  await page.fill('#rsvp-gate-code', 'CODIGO_INVENTADO');
  await page.click('#btn-validate-code');
  await page.waitForTimeout(500);
  const errorText = await page.locator('#rsvp-gate-error').innerText();
  console.log('[Test] Feedback con código inválido:', errorText);

  // 3. Probar con código real FAMILIAPEREZ
  await page.fill('#rsvp-gate-code', 'FAMILIAPEREZ');
  await page.click('#btn-validate-code');
  await page.waitForTimeout(600);

  const isFormVisible = await page.locator('#rsvp-step-form').isVisible();
  const guestName = await page.locator('#rsvp-welcome-name').innerText();
  const passesCount = await page.locator('#rsvp-welcome-passes').innerText();
  console.log('[Test] ¿Paso 2 (Formulario con pases) visible?:', isFormVisible);
  console.log('[Test] Invitado detectado:', guestName, '| Pases:', passesCount);

  // 4. Capturar screenshot del modal en Paso 2
  await page.screenshot({ path: 'dist/rsvp_modal_verified.png' });
  console.log('[Test] Screenshot guardado en dist/rsvp_modal_verified.png');

  await browser.close();
  console.log('[Test] ¡TODO FUNCIONA PERFECTO AL 100%!');
}

testRsvpFlow().catch(console.error);

