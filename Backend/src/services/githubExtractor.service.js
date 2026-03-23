const puppeteer = require("puppeteer");

const extractGithubLinks = async (url) => {

  const browser = await puppeteer.launch({ headless:true });

  const page = await browser.newPage();

  await page.goto(url,{waitUntil:"networkidle2"});

  const links = await page.evaluate(() => {

    const anchors = document.querySelectorAll("a");

    const githubLinks = [];

    anchors.forEach(a => {

      if(a.href.includes("github.com")){
        githubLinks.push(a.href);
      }

    });

    return githubLinks;

  });

  await browser.close();

  return [...new Set(links)];

};

module.exports = extractGithubLinks;