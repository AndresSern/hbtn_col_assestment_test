const express = require("express");
const { checkToken } = require("../authorization/checkToken");
const router = express.Router();

router.post("/", checkToken, (req, res) => {
	/* console.log("res_id", req.params.id); */
	console.log("Andres");
	res.json({
		mensaje: "Post fue creado",
		authData,
	});
});

module.exports = router;
