const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadImg");
const auth = require("../middleware/auth");
const addFilename = require("../middleware/addingNewObjectToReq");
const { Property, validate } = require("../models/property");
const { User } = require("../models/user");

router.get("/", async (req, res) => {
	const properties = await Property.find();
	res.status(200).send(properties);
});

router.get("/:id", async (req, res) => {
	let userProperties = [];
	const propertyIds = (await User.findById({ _id: req.params.id }))
		.properties;

	for (let i = 0; i < propertyIds.length; i++) {
		const id = propertyIds[i];
		const property = await Property.findById({ _id: id });
		userProperties.push(property);
	}
	res.send(userProperties);
});

router.post(
	"/",
	[auth, addFilename, upload.array("propertyDetails", 10)],
	async (req, res) => {
		const { error } = validate(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		const {
			name,
			price,
			location,
			bedroom,
			bathroom,
			description,
			email,
			phone,
		} = req.body;

		const property = await new Property({
			name: name,
			price: price,
			location: location,
			bedroom: bedroom,
			bathroom: bathroom,
			description: description,
			email: email,
			phone: phone,
			imageFileName: req.filename,
		}).save();

		await User.updateOne(
			{ _id: req.userId },
			{ $addToSet: { properties: property._id } }
		);

		console.log("Property successfully uploaded.");
		res.send("Property successfully uploaded.");
	}
);

router.delete("/:userId/:propertyId", async (req, res) => {
	await Property.deleteOne({ _id: req.params.propertyId });
	await User.updateOne(
		{ _id: req.params.userId },
		{ $pull: { properties: req.params.propertyId } }
	);
	res.send("delete");
});

module.exports = router;
