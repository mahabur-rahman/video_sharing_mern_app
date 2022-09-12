const express = require("express");
const app = express();
const colors = require("colors");

// env config
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

// connectedDB
const connectedDB = require("./db/connect");
connectedDB();

// LISTEN APP
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
