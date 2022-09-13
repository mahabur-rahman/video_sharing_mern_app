const express = require("express");
const app = express();
const colors = require("colors");

// ROUTE
const authRoute = require("./routes/auth.route");

// env config
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

// connectedDB
const connectedDB = require("./db/connect");
connectedDB();

app.use(express.json());
app.use("/api/auth", authRoute);

// ERROR HANDLER
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// LISTEN APP
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
