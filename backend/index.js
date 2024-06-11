const express = require("express");
const cors = require("cors");
const router = express.Router();
const { db } = require("./config/db");
require("dotenv").config();
const app = express();
const authRoutes = require("./routes/index");
app.use(express.json());
app.use(cors());
app.use("/api", authRoutes);
db();
app.listen(process.env.PORT || 5000, "127.0.0.1", () => {
  console.log(`Server is running on http://127.0.0.1:${process.env.PORT || 5000}`);
});
