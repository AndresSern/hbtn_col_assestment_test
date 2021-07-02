const express = require("express");
const { checkToken } = require("../authorization/checkToken");
const router = express.Router();

router.get("/", checkToken, (req, res) => {
	res.json({
		mensaje: "You Are in Server",
	});
});

module.exports = router;
