const express = require("express");
const router = express.Router();

const passport = require("../config/passport");
const authController = require("../controllers/auth.controller");
const generateToken = require("../utils/generateToken"); // 🔥 important

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// 🔥 GOOGLE LOGIN
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// 🔥 CALLBACK FIX
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {

    // 🔥 JWT token generate
    const token = generateToken(req.user._id);

    // 🔥 frontend redirect
    res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
  }
);

module.exports = router;