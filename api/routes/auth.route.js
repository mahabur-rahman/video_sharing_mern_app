const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  googleAuth,
} = require("../controllers/auth.controller");

// CREATE A USER  | REGISTER
router.post("/register", registerUser);

// LOGIN USER
router.post("/login", loginUser);

// GOOGLE AUTH
router.post("/google", googleAuth);

// export
module.exports = router;
