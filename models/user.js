const joi = require("joi");
const mongoose = require("mongoose");
const config = require("../config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	properties: { type: Array, required: false },
});

userSchema.methods.getAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
		},
		config.serverSecret
	);
	return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
	const schema = joi.object({
		name: joi.string().required(),
		email: joi.string().required(),
		password: joi.string().required(),
	});
	return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
