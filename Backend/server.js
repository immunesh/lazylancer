const app = require("./src/app");
require("dotenv").config();
const connection = require("./src/config/db");

const http = require("http");
const { Server } = require("socket.io");

// 🔥 CREATE HTTP SERVER
const server = http.createServer(app);

// 🔥 SOCKET.IO SETUP
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["Get" , "Post" , "Put"],
    credentials : true
  },
});

// 🔥 SOCKET LOGIC IMPORT
const setupSocket = require("./src/socket");
setupSocket(io);

// 🔥 START SERVER
server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
    console.log("Error connecting in database");
  }

  console.log(`Server + Socket running on http://localhost:${process.env.PORT}`);
});