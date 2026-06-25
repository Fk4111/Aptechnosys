const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);

  // Screenshot 1: Before clicking menu
  await page.screenshot({ path: path.join(outDir, 'mobile_1_before.png'), fullPage: false });
  console.log('Screenshot 1: Before clicking menu saved');

  // Get button bounding box BEFORE click
  const btn = await page.locator('button[aria-label="Toggle menu"]');
  const boxBefore = await btn.boundingBox();
  console.log('Button position BEFORE click:', JSON.stringify(boxBefore));

  // Click the menu button
  await btn.click();
  await page.waitForTimeout(500);

  // Screenshot 2: After opening menu
  await page.screenshot({ path: path.join(outDir, 'mobile_2_open.png'), fullPage: false });
  console.log('Screenshot 2: Menu open saved');

  // Get button bounding box AFTER click (menu open)
  const boxAfterOpen = await btn.boundingBox();
  console.log('Button position AFTER opening menu:', JSON.stringify(boxAfterOpen));

  // Check if button moved
  const jumpX = Math.abs((boxBefore?.x ?? 0) - (boxAfterOpen?.x ?? 0));
  const jumpY = Math.abs((boxBefore?.y ?? 0) - (boxAfterOpen?.y ?? 0));
  console.log(`Button X jump: ${jumpX.toFixed(2)}px, Y jump: ${jumpY.toFixed(2)}px`);
  if (jumpX > 2) {
    console.log(`⚠️  BUTTON JUMPS HORIZONTALLY by ${jumpX.toFixed(1)}px when menu opens!`);
  } else {
    console.log('✅ Button stays in place horizontally when menu opens');
  }

  // Click again to close
  await btn.click();
  await page.waitForTimeout(500);

  // Screenshot 3: After closing menu
  await page.screenshot({ path: path.join(outDir, 'mobile_3_closed.png'), fullPage: false });
  console.log('Screenshot 3: Menu closed saved');

  const boxAfterClose = await btn.boundingBox();
  console.log('Button position AFTER closing menu:', JSON.stringify(boxAfterClose));

  const jumpXClose = Math.abs((boxBefore?.x ?? 0) - (boxAfterClose?.x ?? 0));
  if (jumpXClose > 2) {
    console.log(`⚠️  BUTTON JUMPS HORIZONTALLY by ${jumpXClose.toFixed(1)}px when menu closes!`);
  } else {
    console.log('✅ Button returns to original position correctly');
  }

  await browser.close();
  console.log('\nDone! Screenshots saved to:', outDir);
})();
