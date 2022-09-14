const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  updatedUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", verifyToken, updatedUser);

// DELETE USER
router.delete("/:id", verifyToken, deleteUser);

// GET SINGLE USER
router.get("/find/:id", getSingleUser);

// export
module.exports = router;
