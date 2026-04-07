const mongoose = require("mongoose");
const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

// 🔥 SEND MESSAGE
exports.sendMessage = async (req, res) => {
  try {
    const sender = req.user._id;
    const { receiver, message } = req.body;

    // ✅ VALIDATION
    if (!receiver) {
      return res.status(400).json({ message: "Receiver is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(receiver)) {
      return res.status(400).json({ message: "Invalid receiver ID" });
    }

    // 🔍 FIND CONVERSATION
    let conversation = await Conversation.findOne({
      members: { $all: [sender, receiver] },
    });

    // ➕ CREATE IF NOT EXISTS
    if (!conversation) {
      conversation = await Conversation.create({
        members: [sender, receiver],
      });
    }

    // 💬 CREATE MESSAGE
    const newMessage = await Message.create({
      conversationId: conversation._id,
      sender,
      receiver,
      message,
    });

    // 📝 UPDATE LAST MESSAGE
    conversation.lastMessage = message;
    await conversation.save();

    res.status(201).json(newMessage);
  } catch (err) {
    console.log("SEND MSG ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔥 GET MESSAGES
exports.getMessages = async (req, res) => {
  try {
    const userId = req.user._id;
    const receiverId = req.params.id;

    const conversation = await Conversation.findOne({
      members: { $all: [userId, receiverId] },
    });

    if (!conversation) return res.json([]);

    const messages = await Message.find({
      conversationId: conversation._id,
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("GET MSG ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔥 GET CONVERSATIONS
exports.getConversations = async (req, res) => {
  try {
    const userId = req.user._id;

    const conversations = await Conversation.find({
      members: userId,
    })
      .populate("members", "name email avatar")
      .sort({ updatedAt: -1 });

    res.json(conversations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.markSeen = async (req, res) => {
  try {
    const { conversationId } = req.body;

    await Message.updateMany(
      { conversationId, seen: false },
      { seen: true }
    );

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error marking seen" });
  }
};