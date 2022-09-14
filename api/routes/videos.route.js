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
  getByTag,
  search,
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

// SUBSCRIBE all VIDEOS or channels
router.get("/sub", verifyToken, sub);

// GET BY TAGS WITH QUERY
router.get("/tags", getByTag);

// SEARCH WITH QUERY or title
router.get("/search", search);

// export
module.exports = router;
