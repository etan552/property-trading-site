const mongoose = require("mongoose");
const joi = require("joi");
const { number } = require("joi");

const schemaProperty = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: String, required: true },
	location: { type: String, required: true },
	bedroom: { type: String, required: true },
	bathroom: { type: String, required: true },
	description: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	imageFileName: [String],
});

const Property = mongoose.model("property", schemaProperty);

validateProperty = (property) => {
	const schema = joi.object({
		_id: joi.string(),
		name: joi.string().required(),
		price: joi.string().required(),
		location: joi.string().required(),
		bedroom: joi.string().required(),
		bathroom: joi.string().required(),
		description: joi.string().required(),
		email: joi.string().required(),
		phone: joi.string().required(),
		__v: joi.number(),
		imageFileName: joi.array().items(joi.string()),
	});
	return schema.validate(property);
};

exports.Property = Property;
exports.validate = validateProperty;
