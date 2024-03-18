const express = require("express");
const dotenv = require("dotenv").config();

const cors = require("cors");

const port = process.env.PORT || 3300;

const app = express();

// ----------Common middleware----------
app.use(cors());
// Accept json
app.use(express.json());
app.use(express.static("static"));

// Allow access uploads folder
app.use("/uploads", express.static("./uploads/"));

// Basic route
app.get("/", (req, res) => {
  res.send(`Welcome to the server!`);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
