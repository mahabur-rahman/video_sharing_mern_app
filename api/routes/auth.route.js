const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");

// CREATE A USER  | REGISTER
router.post("/register", registerUser);

// LOGIN USER
router.post("/login", loginUser);

// export
module.exports = router;
