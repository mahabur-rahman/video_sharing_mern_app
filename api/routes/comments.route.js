const express = require("express");
const router = express.Router();

const verifyToken = require("../verifyToken");
const {
  addComment,
  deleteComment,
} = require("../controllers/comment.controller");

// ADD COMMENT
router.post("/", verifyToken, addComment);

// DELETE COMMENT
router.delete("/:id", verifyToken, deleteComment);

// export
module.exports = router;
