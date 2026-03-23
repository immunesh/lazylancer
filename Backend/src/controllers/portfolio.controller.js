const Portfolio = require("../models/portfolio.model");

const scrapePortfolio = require("../services/portfolioScraper.service");
const parsePDF = require("../services/pdfParser.service");

const analyzeSkills = require("../services/skillAnalyzer.service");
const detectProjects = require("../services/projectDetector.service");
const detectTechStack = require("../services/techStackDetector.service");
const extractGithubLinks = require("../services/githubExtractor.service");

exports.uploadPortfolio = async (req, res) => {
  try {
    let text = "";
    let githubLinks = [];

    // Portfolio URL provided
    if (req.body.portfolioUrl) {
      const url = req.body.portfolioUrl;

      // Extract portfolio text
      text = await scrapePortfolio(url);

      console.log("===== Extracted Text =====");
      console.log(text.slice(0, 1000));

      // Extract GitHub links from HTML
      githubLinks = await extractGithubLinks(url);
    }

    // Portfolio PDF uploaded
    if (req.file) {
      text = await parsePDF(req.file.path);
    }

    // Skill detection
    const skills = analyzeSkills(text);

    // Project detection
    const projects = detectProjects(text);

    // Tech stack detection
    const techStack = detectTechStack(text);

    // Save in DB
    const portfolio = await Portfolio.create({
      userId: req.user._id,

      portfolioUrl: req.body.portfolioUrl || "",

      fileName: req.file ? req.file.filename : "",

      extractedText: text,

      skills,

      projects,

      githubLinks,

      techStack,
    });

    res.json({
      message: "Advanced portfolio analysis complete",

      skills,

      projects,

      githubLinks,

      techStack,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
