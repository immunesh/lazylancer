const puppeteer = require("puppeteer");

const scrapePortfolio = async (url) => {

  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2"
  });

  const text = await page.evaluate(() => {
    return document.body.innerText;
  });

  await browser.close();

  return text;
};

module.exports = scrapePortfolio;