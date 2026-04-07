const express = require("express");
const router = express.Router();

const {
  sendMessage,
  getMessages,
  getConversations,
  markSeen
} = require("../controllers/message.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/conversations", authMiddleware, getConversations);
router.get("/:id", authMiddleware, getMessages);
router.post("/", authMiddleware, sendMessage);
router.put("/seen", authMiddleware, markSeen);

module.exports = router;