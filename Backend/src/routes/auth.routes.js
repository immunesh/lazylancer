const express = require("express");
const router = express.Router();

const passport = require("../config/passport");
const authController = require("../controllers/auth.controller");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get(
"/google",
passport.authenticate("google",{scope:["profile","email"]})
);

router.get(
"/google/callback",
passport.authenticate("google",{session:false}),
(req,res)=>{

res.json({
 message:"Google login successful",
 user:req.user
});

}
);


// router.get(
// "/github",
// passport.authenticate("github",{scope:["user:email"]})
// );

// router.get(
// "/github/callback",
// passport.authenticate("github",{session:false}),
// (req,res)=>{

// res.json({
//  message:"GitHub login successful",
//  user:req.user
// });

// }
// );

module.exports = router;