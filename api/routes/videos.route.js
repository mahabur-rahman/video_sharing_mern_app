const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  addVideo,
  updatedVideo,
  deletedVideo,
  getSingleVideo,
  addView,
  trend,
  random,
  sub,
} = require("../controllers/video.controller");

// CREATE A VIDEO
router.post("/", verifyToken, addVideo);

// UPDATE VIDEO
router.put("/:id", verifyToken, updatedVideo);

// DELETE VIDEO
router.delete("/:id", verifyToken, deletedVideo);

// GET SINGLE VIDEO
router.get("/find/:id", getSingleVideo);

// INCREMENT VIEW
router.put("/view/:id", addView);

// TREND VIDEO | GET
router.get("/trend", trend);

// RANDOM | GET
router.get("/random", random);

// SUBSCRIBE VIDEOS
router.get("/sub", verifyToken, sub);

// export
module.exports = router;
