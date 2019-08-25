const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://www.super-parrain.com/login');

  await page.type('#username', 'antoine.augusti@gmail.com');
  await page.type('#password', process.env.PASSWORD);

  await page.keyboard.press('Enter');


  await page.waitForNavigation();

  console.log('New Page URL:', page.url());
  console.log(await page.content());
  await browser.close();
})();
