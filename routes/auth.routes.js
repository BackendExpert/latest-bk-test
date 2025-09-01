const express = require("express");
const { register, login, getProfile } = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", auth, getProfile);

module.exports = router;
