const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  addVideo,
  updatedVideo,
  deletedVideo,
  getSingleVideo,
} = require("../controllers/video.controller");

// CREATE A VIDEO
router.post("/", verifyToken, addVideo);

// UPDATE VIDEO
router.put("/:id", verifyToken, updatedVideo);

// DELETE VIDEO
router.delete("/:id", verifyToken, deletedVideo);

// GET SINGLE VIDEO
router.get("/find/:id", getSingleVideo);

// export
module.exports = router;
