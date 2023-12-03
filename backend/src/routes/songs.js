const express = require("express");
const router = express.Router();
const {
  create,
  getAllSongsById,
  getSingleSong,
  updateSong,
  deleteSong,
  searchSong,
} = require("../controllers/songsController");
const { protectedAdminRoutes } = require("../middleware/protectedRoutes");
const { uploadImage } = require("../services/imageUpload");

// Open Routes
router.get("/", searchSong);
router.get("/:id", getSingleSong);
router.get("/all/:id", getAllSongsById);
router.delete("/:id", deleteSong);

// Protected route Middleware
router.use(protectedAdminRoutes);

// Protected Upload Route //
router.post("/upload", uploadImage, create);
router.put("/:id", updateSong);

module.exports = router;
