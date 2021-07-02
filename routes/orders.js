const express = require("express");
const jwt = require("jsonwebtoken");
const { checkToken } = require("../authorization/checkToken");
const router = express.Router();

router.post("/", checkToken, (req, res) => {
	console.log("Andres");
	res.json({
		mensaje: "Post fue creado",
		authData,
	});
});

module.exports = router;
