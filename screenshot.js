const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  
  // Navigate to local server
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText || '');
  });
  await page.goto('http://localhost:8083/index.html', { waitUntil: 'networkidle2' });
  
  // 1. Capture Hero page
  await page.screenshot({ path: 'mobile_view.png' });
  console.log('Saved mobile_view.png');
  
  // 2. Capture About page
  await page.evaluate(() => {
    document.getElementById('page-about').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_about_view.png' });
  console.log('Saved mobile_about_view.png');
  
  // 3. Capture Timeline page
  await page.evaluate(() => {
    document.getElementById('page-timeline').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_timeline_view.png' });
  console.log('Saved mobile_timeline_view.png');
  
  // 4. Capture Scoring page
  await page.evaluate(() => {
    document.getElementById('page-scoring').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_scoring_view.png' });
  console.log('Saved mobile_scoring_view.png');
  
  // 5. Capture Rules page
  await page.evaluate(() => {
    document.getElementById('page-rules').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_rules_view.png' });
  console.log('Saved mobile_rules_view.png');
  
  // 6. Capture Prizes page
  await page.evaluate(() => {
    document.getElementById('page-prizes').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_prizes_view.png' });
  console.log('Saved mobile_prizes_view.png');

  // 7. Capture Register page
  await page.evaluate(() => {
    document.getElementById('page-register').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: 'mobile_register_view.png' });
  console.log('Saved mobile_register_view.png');
  
  // 7. Capture Desktop Scoring page
  const desktopPage = await browser.newPage();
  desktopPage.on('console', msg => console.log('PAGE LOG (DESKTOP):', msg.text()));
  desktopPage.on('pageerror', err => console.error('PAGE ERROR (DESKTOP):', err.message));
  desktopPage.on('requestfailed', request => {
    console.log('REQUEST FAILED (DESKTOP):', request.url(), request.failure()?.errorText || '');
  });
  await desktopPage.setViewport({ width: 1440, height: 900 });
  await desktopPage.goto('http://localhost:8083/index.html', { waitUntil: 'networkidle2' });
  await desktopPage.evaluate(() => {
    document.getElementById('page-scoring').scrollIntoView();
    // Simulate hover on the first score card
    const firstCard = document.querySelector('.score-card[data-index="0"]');
    if (firstCard) {
      const event = new MouseEvent('mouseenter', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      firstCard.dispatchEvent(event);
    }
  });
  await new Promise(r => setTimeout(r, 2000)); // Wait 2s for animations to settle
  await desktopPage.screenshot({ path: 'desktop_scoring_view.png' });
  console.log('Saved desktop_scoring_view.png');
  
  await browser.close();
})();
