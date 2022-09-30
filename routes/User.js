const express = require("express");
const router = express.Router();

const { getUsers, register, login } = require("../controllers/User");

router.post("/register", register)
router.post("/login", login)

router.get("/all", getUsers);

module.exports = router;
