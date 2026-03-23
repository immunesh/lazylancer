const app = require("./src/app");
require("dotenv").config();
const connection = require("./src/config/db");

app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connected to db");
    } catch (err) {
      console.log(err);
      console.log("Error connecting in database");
    }
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
