const express = require("express");
const router = express.Router();
const {
  create,
  getUniqueArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/artistController");
const { protectedAdminRoutes } = require("../middleware/protectedRoutes");

// Open Routes
router.get("/:id", getUniqueArtist);

// Protected route Middleware
router.use(protectedAdminRoutes);

// Protected Upload Route //
router.post("/upload", create);
router.delete("/:id", deleteArtist);
router.put("/:id", updateArtist);

module.exports = router;
