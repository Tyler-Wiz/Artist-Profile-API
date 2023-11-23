const express = require("express");
const passport = require("passport");
const { create, login } = require("../controllers/authController");
const router = express.Router();

router.post("/register", create);
router.post("/login", passport.authenticate("local"), login);

module.exports = router;
