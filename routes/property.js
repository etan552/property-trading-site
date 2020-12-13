const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Property, validate } = require("../models/property");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "..", "uploads"));
	},
	filename: (req, file, cb) => {
		cb(
			null,
			new Date().toISOString().replace(/:/g, "-") + file.originalname
		);
	},
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
	const properties = await Property.find();

	res.status(200).send(properties);
});

router.post("/", upload.array("propertyDetails", 10), async (req, res) => {
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

	await new Property({
		name: name,
		price: price,
		location: location,
		bedroom: bedroom,
		bathroom: bathroom,
		description: description,
		email: email,
		phone: phone,
	}).save();

	console.log("Property successfully uploaded.");
	res.send("Property successfully uploaded.");
});

module.exports = router;
