const express = require("express");
const router = express.Router();

const verifyToken = require("../verifyToken");
const { addComment } = require("../controllers/comment.controller");

// ADD COMMENT
router.post("/", verifyToken, addComment);

// export
module.exports = router;
