const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const { updatedUser } = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", verifyToken, updatedUser);

// export
module.exports = router;
