const express = require("express");
const app = express();


const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors({ origin: ["http://localhost:5173","https://syno-client-qw4kzj7us-abhishekcs3459.vercel.app"], credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

// connection to db
// password
const DB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/express-auth";
mongoose.connect(DB_URL).then(() => {
  console.log("Connected to MongoDB");
});
app.get("/", (req, res) => {
  res.json({
    message: "Test Ok",
  });
});

// listening to port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
