const express = require("express");
const router = express.Router();
const {
  create,
  getUniqueArtist,
  updateArtist,
  deleteArtist,
  getAllArtist,
} = require("../controllers/artistController");
const { protectedAdminRoutes } = require("../middleware/protectedRoutes");
const { uploadImage } = require("../services/imageUpload");

// Open Routes
router.get("/:id", getUniqueArtist);
router.get("/", getAllArtist);

// Protected route Middleware
router.use(protectedAdminRoutes);

// Protected Upload Route //
router.post("/upload", uploadImage, create);
router.delete("/:id", deleteArtist);
router.put("/:id", uploadImage, updateArtist);

module.exports = router;
