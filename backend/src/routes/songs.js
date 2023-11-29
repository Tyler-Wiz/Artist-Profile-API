const express = require("express");
const {
  create,
  getAllSongsById,
  getSingleSong,
  updateSong,
  deleteSong,
  searchSong,
} = require("../controllers/songsController");
const { protectedAdminRoutes } = require("../middleware/protectedRoutes");
const router = express.Router();

// Open Routes
router.post("/search", searchSong);
router.get("/:id", getSingleSong);
router.get("/all/:id", getAllSongsById);

// Protected route Middleware
router.use(protectedAdminRoutes);

// Protected Upload Route //
router.post("/upload", create);
router.delete("/:id", deleteSong);
router.put("/:id", updateSong);

module.exports = router;
