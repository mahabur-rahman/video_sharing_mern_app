const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/auth.controller");

// CREATE A USER  | REGISTER
router.post("/register", registerUser);

// export
module.exports = router;
