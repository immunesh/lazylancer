const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const portfolioRoutes = require("./routes/portfolio.routes");
const passport = require("./config/passport");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/portfolio",portfolioRoutes);

app.get("/", (req,res)=>{
  res.json({message:"LazyLancer Backend Running"})
});

module.exports = app;