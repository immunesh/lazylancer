const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

const portfolioController = require("../controllers/portfolio.controller");

router.post(
 "/upload",
 authMiddleware,
 upload.single("portfolio"),
 portfolioController.uploadPortfolio
);

module.exports = router;