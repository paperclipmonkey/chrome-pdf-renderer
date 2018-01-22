const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/render/index.html', {waitUntil: 'networkidle2'});

  await page.evaluate(() => {
    $('#development-container').removeClass('a4')
    $('#development-container').removeClass('landscape')
    $('#development-container').removeClass('a3')

    $('#development-container').addClass('a3')
    $('#development-container').addClass('landscape')
  })
  await page.pdf({path: 'output-a3-l.pdf', format: 'A3', landscape: true, printBackground: true});

  await page.evaluate(() => {
    $('#development-container').removeClass('a4')
    $('#development-container').removeClass('landscape')
    $('#development-container').removeClass('a3')

    $('#development-container').addClass('a3')
  })
  await page.pdf({path: 'output-a3-p.pdf', format: 'A3', landscape: false, printBackground: true});

  await page.evaluate(() => {
    $('#development-container').removeClass('a4')
    $('#development-container').removeClass('landscape')
    $('#development-container').removeClass('a3')

    $('#development-container').addClass('a4')
    $('#development-container').addClass('landscape')
  })
  await page.pdf({path: 'output-a4-l.pdf', format: 'A4', landscape: true, printBackground: true});

  await page.evaluate(() => {
    $('#development-container').removeClass('a4')
    $('#development-container').removeClass('landscape')
    $('#development-container').removeClass('a3')

    $('#development-container').addClass('a4')
  })
  await page.pdf({path: 'output-a4-p.pdf', format: 'A4', landscape: false, printBackground: true});
  // await page.screenshot({path: 'output.png'});
  await browser.close();
})();
