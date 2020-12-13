const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const joi = require("joi");
const bcryptjs = require("bcryptjs");

router.post("/", async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Invalid email or password.");

	const validPassword = await bcryptjs.compare(
		req.body.password,
		user.password
	);
	if (!validPassword)
		return res.status(400).send("Invalid email or password.");

	const token = user.getAuthToken();

	res.header("x-auth-token", token)
		.header("access-control-expose-headers", "x-auth-token")
		.send("Login successfully");
});

function validate(user) {
	const schema = joi.object({
		email: joi.string().required(),
		password: joi.string().required(),
	});
	return schema.validate(user);
}
module.exports = router;
