const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  updatedUser,
  deleteUser,
  getSingleUser,
  subscribeUser,
  unsubscribeUser,
} = require("../controllers/user.controller");

// UPDATE USER
router.put("/:id", verifyToken, updatedUser);

// DELETE USER
router.delete("/:id", verifyToken, deleteUser);

// GET SINGLE USER
router.get("/find/:id", getSingleUser);

// SUBSCRIBE A USER
router.put("/subscribe/:id", verifyToken, subscribeUser);

// UNSUBSCRIBE A USER
router.put("/unsubscribe/:id", verifyToken, unsubscribeUser);

// export
module.exports = router;
