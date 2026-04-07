const User = require("../models/user.model");
const Portfolio = require("../models/portfolio.model");

exports.getProfile = async (req, res) => {

  try {

    const user = await User.findById(req.user._id).select("-password");

    const portfolio = await Portfolio.findOne({
      userId: req.user._id
    }).sort({ createdAt: -1 });

    res.json({
      user,
      portfolio
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }

};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({
      _id: { $ne: req.user._id },
    }).select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};