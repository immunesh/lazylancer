// let users = {}; // { userId: socketId }

// const setupSocket = (io) => {
//   io.on("connection", (socket) => {
//     console.log("User connected:", socket.id);

//     // 🔥 JOIN
//     socket.on("join", (userId) => {
//       users[userId] = socket.id;

//       // ✅ BROADCAST ONLINE USERS
//       io.emit("onlineUsers", users);
//     });

//     // 🔥 SEND MESSAGE
//     socket.on("sendMessage", ({ sender, receiver, message }) => {
//       const receiverSocket = users[receiver];

//       if (receiverSocket) {
//         io.to(receiverSocket).emit("receiveMessage", {
//           sender,
//           receiver,
//           message,
//           seen: false,
//           createdAt: new Date(),
//         });
//       }
//     });

//     // 🔥 TYPING
//     socket.on("typing", ({ sender, receiver }) => {
//       const receiverSocket = users[receiver];

//       if (receiverSocket) {
//         io.to(receiverSocket).emit("typing", { sender });
//       }
//     });

//     // 🔥 STOP TYPING
//     socket.on("stopTyping", ({ sender, receiver }) => {
//       const receiverSocket = users[receiver];

//       if (receiverSocket) {
//         io.to(receiverSocket).emit("stopTyping", { sender });
//       }
//     });

//     // 🔥 SEEN (NEW 🔥🔥🔥)
//     socket.on("seenMessages", ({ sender, receiver }) => {
//       const senderSocket = users[sender];

//       if (senderSocket) {
//         io.to(senderSocket).emit("messagesSeen", {
//           by: receiver,
//         });
//       }
//     });

//     // 🔥 DISCONNECT
//     socket.on("disconnect", () => {
//       for (let userId in users) {
//         if (users[userId] === socket.id) {
//           delete users[userId];
//         }
//       }

//       // ✅ UPDATE ONLINE USERS
//       io.emit("onlineUsers", users);

//       console.log("User disconnected:", socket.id);
//     });
//   });
// };

// module.exports = setupSocket;

const User = require("./models/user.model");
const Message = require("./models/message.model");

let users = {};

const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // 🔥 JOIN
    socket.on("join", async (userId) => {
      users[userId] = socket.id;

      await User.findByIdAndUpdate(userId, {
        isOnline: true,
      });

      io.emit("userOnline", userId);
    });

    // 🔥 SEND MESSAGE (UPDATED)
    socket.on("sendMessage", (msg) => {
      const receiverSocket = users[msg.receiver];

      if (receiverSocket) {
        io.to(receiverSocket).emit("receiveMessage", msg); // ✅ full msg send
      }
    });

    // 🔥 SEEN
    socket.on("seen", async ({ conversationId, sender }) => {
      try {
        // 🔥 DB UPDATE (missing tha)
        await Message.updateMany(
          { conversationId, sender, seen: false },
          { seen: true },
        );

        const senderSocket = users[sender];

        if (senderSocket) {
          io.to(senderSocket).emit("messageSeen", {
            conversationId,
            sender,
          });
        }
      } catch (err) {
        console.log("Seen error:", err);
      }
    });

    // 🔥 TYPING
    socket.on("typing", ({ sender, receiver }) => {
      const receiverSocket = users[receiver];

      if (receiverSocket) {
        io.to(receiverSocket).emit("typing", { sender });
      }
    });

    // 🔥 STOP TYPING
    socket.on("stopTyping", ({ sender, receiver }) => {
      const receiverSocket = users[receiver];

      if (receiverSocket) {
        io.to(receiverSocket).emit("stopTyping", { sender });
      }
    });

    // 🔥 DISCONNECT
    socket.on("disconnect", async () => {
      for (let userId in users) {
        if (users[userId] === socket.id) {
          delete users[userId];

          await User.findByIdAndUpdate(userId, {
            isOnline: false,
            lastSeen: new Date(),
          });

          io.emit("userOffline", userId);
        }
      }
    });

    
  });
};

module.exports = setupSocket;
