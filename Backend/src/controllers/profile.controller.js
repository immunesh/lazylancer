const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

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

exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;

    const { currentPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findById(userId);

    // ❌ GOOGLE LOGIN BLOCK
    if (user.provider === "google") {
      return res.status(400).json({
        message: "Google users cannot change password",
      });
    }

    // ❌ CHECK CURRENT PASSWORD
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    // ❌ MATCH CHECK
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // ❌ SAME PASSWORD
    if (currentPassword === newPassword) {
      return res.status(400).json({
        message: "New password must be different",
      });
    }

    // ❌ MIN LENGTH
    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    // ✅ HASH
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.json({
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error("PASSWORD ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};