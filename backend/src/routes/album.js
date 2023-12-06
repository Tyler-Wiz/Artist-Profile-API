const express = require("express");
const {
  createAlbum,
  getSingleAlbum,
  getAllAlbums,
  getArtistsAlbums,
  deleteAlbum,
  updateAlbum,
} = require("../controllers/albumController");
const { protectedAdminRoutes } = require("../middleware/protectedRoutes");
const { uploadImage } = require("../services/imageUpload");

const router = express.Router();

// Open Routes
router.get("/:id", getSingleAlbum);
router.get("/", getAllAlbums);
router.get("/artist/:id", getArtistsAlbums);

// Protected route Middleware
router.use(protectedAdminRoutes);

// Protected Upload Route //
router.post("/upload", uploadImage, createAlbum);
router.delete("/:id", deleteAlbum);
router.put("/:id", updateAlbum);

module.exports = router;
