const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user)
		return res.status(400).send("This email has already be registered.");

	user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	const salt = await bcryptjs.genSalt(5);
	user.password = await bcryptjs.hash(user.password, salt);

	await user.save();

	const token = user.getAuthToken();

	res.status(200)
		.header("x-auth-token", token)
		.header("access-control-expose-headers", "x-auth-token")
		.send("Successfully registered user.");
});

module.exports = router;
