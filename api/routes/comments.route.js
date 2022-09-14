const express = require("express");
const router = express.Router();

const verifyToken = require("../verifyToken");
const {
  addComment,
  deleteComment,
  getComments,
} = require("../controllers/comment.controller");

// ADD COMMENT
router.post("/", verifyToken, addComment);

// DELETE COMMENT
router.delete("/:id", verifyToken, deleteComment);

// GET ALL COMMENTS
router.get("/:videoId", getComments);

// export
module.exports = router;
