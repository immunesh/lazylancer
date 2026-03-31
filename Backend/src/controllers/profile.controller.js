const User = require("../models/user.model");

// 🔥 UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, email } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.provider === "google") {
      user.name = name;
    } else {
      user.name = name;
      if (email) user.email = email;
    }

    await user.save();

    res.json({
      message: "Profile updated",
      user,
    });

  } catch (err) {
    console.error("UPDATE PROFILE ERROR:", err); // 👈 IMPORTANT
    res.status(500).json({ message: err.message });
  }
};

// 🔥 UPLOAD AVATAR
exports.uploadAvatar = async (req, res) => {
  try {
    const userId = req.user.id;

   const avatarUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(
      userId,
      { avatar: avatarUrl },
      { new: true }
    );

    res.json({
      message: "Avatar updated",
      user,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};