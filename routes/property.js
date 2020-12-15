const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadImg");
const addFilename = require("../middleware/addingNewObjectToReq");
const { Property, validate } = require("../models/property");

router.get("/", async (req, res) => {
	const properties = await Property.find();

	res.status(200).send(properties);
});

router.post(
	"/",
	[addFilename, upload.array("propertyDetails", 10)],
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

		// console.log(abc);

		await new Property({
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

		console.log("Property successfully uploaded.");
		res.send("Property successfully uploaded.");
	}
);

module.exports = router;
