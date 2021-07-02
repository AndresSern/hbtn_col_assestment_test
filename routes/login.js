const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
	const user = {
		id: 1,
		nombre: "Henry",
		email: "henry@email.com",
	};

	const jsonToken = jwt.sign({ user }, "HS384", { expiresIn: "1h" });
	return res.json({
		success: 1,
		message: "login successfully",
		token: jsonToken,
	});
});

module.exports = router;
