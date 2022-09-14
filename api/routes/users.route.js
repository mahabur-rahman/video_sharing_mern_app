const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const { updatedUser, deleteUser } = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", verifyToken, updatedUser);

// DELETE USER
router.delete("/:id", verifyToken, deleteUser);
// export
module.exports = router;
