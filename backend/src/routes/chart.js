const express = require("express");
const { create } = require("../controllers/chartController");
const router = express.Router();

router.post("/", create);

module.exports = router;
