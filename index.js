const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 8000;
const MONGGODB_URL = process.env.REACT_APP_MONGODB_CONNECT;

// const userRouter = require("./routes/User");
const produkRouter = require("./routes/Produk");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ extended: false }));
app.use('/uploads', express.static('uploads'));

// API
// app.use("/users", userRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/produk", produkRouter);
app.get("/", (req, res) => {
  res.send("Welcome to JBA Lelang API");
});

// Connect Monggo.DB
mongoose
  .connect(MONGGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.log(`${error} did not match`);
    // Exit process with failure
    process.exit(1);
  });
