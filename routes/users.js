const express = require("express");
const { checkToken } = require("../autorization/checkToken");
const router = express.Router();

router.get("/", checkToken, (req, res) => {
	res.json({
		mensaje: "You Are In Users",
	});
});

module.exports = router;
