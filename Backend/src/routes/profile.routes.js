const express = require("express");
const router = express.Router();

const {
  updateProfile,
  uploadAvatar,
} = require("../controllers/profile.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

router.put("/update", authMiddleware, updateProfile);

router.post(
  "/avatar",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatar
);

module.exports = router;