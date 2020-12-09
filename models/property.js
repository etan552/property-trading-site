const mongoose = require("mongoose");
const joi = require("joi");

const schemaProperty = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: String, required: true },
	location: { type: String, required: true },
	bedroom: { type: Number, required: true },
	bathroom: { type: Number, required: true },
	description: { type: String, required: true },
});

const Property = mongoose.model("property", schemaProperty);

validateProperty = (property) => {
	const schema = joi.object({
		name: joi.string().required(),
		price: joi.string().required(),
		location: joi.string().required(),
		bedroom: joi.number().required(),
		bathroom: joi.number().required(),
		description: joi.string().required(),
	});
	return schema.validate(property);
};

exports.Property = Property;
exports.validate = validateProperty;