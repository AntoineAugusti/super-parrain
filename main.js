const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  const page = await browser.newPage();

  await page.goto('https://www.super-parrain.com/login');

  await page.type('#username', 'antoine.augusti@gmail.com');
  await page.type('#password', process.env.PASSWORD);
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await page.waitFor(70000);

  await page.goto("https://www.super-parrain.com/offres/habitation/parrainage-planete-oui");
  console.log('New Page URL:', page.url());
  await page.waitFor(70000);

  await page.goto("https://www.super-parrain.com/offres/assurance/parrainage-alan");
  console.log('New Page URL:', page.url());
  await page.waitFor(70000);

  await page.goto("https://www.super-parrain.com/users/antoinea");
  console.log('New Page URL:', page.url());
  await page.waitFor(70000);

  await browser.close();
})();
