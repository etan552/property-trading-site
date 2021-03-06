const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadImg");
const auth = require("../middleware/auth");
const addFilename = require("../middleware/addingNewObjectToReq");
const { Property, validate } = require("../models/property");
const { User } = require("../models/user");

// sending all properties
router.get("/", async (req, res) => {
	// querying all properties
	const properties = await Property.find();
	res.status(200).send(properties);
});

// getting all properties that belong to a particular user
router.get("/:id", async (req, res) => {
	let userProperties = [];
	// querying properties belonging to a user
	const propertyIds = (await User.findById({ _id: req.params.id }))
		.properties;

	// pushing property into an array
	for (let i = 0; i < propertyIds.length; i++) {
		const id = propertyIds[i];
		const property = await Property.findById({ _id: id });
		userProperties.push(property);
	}
	res.send(userProperties);
});

// create new property
router.post(
	"/",
	[auth, addFilename, upload.array("propertyDetails", 10)],
	async (req, res) => {
		// validate property obj
		const { error } = validate(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		// obj destructuring
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

		// save to db
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

		// saving property id to user's db
		await User.updateOne(
			{ _id: req.userId },
			{ $addToSet: { properties: property._id } }
		);

		console.log("Property successfully uploaded.");
		res.send("Property successfully uploaded.");
	}
);

// delete property
router.delete("/:userId/:propertyId", auth, async (req, res) => {
	// deleting property from property db
	await Property.deleteOne({ _id: req.params.propertyId });

	//deleting property id from user's db
	await User.updateOne(
		{ _id: req.params.userId },
		{ $pull: { properties: req.params.propertyId } }
	);
	res.send("deletion completed");
});

// updating property details
router.put("/", auth, async (req, res) => {
	// validate property obj
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// obj destructuring
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

	// updating property fields
	await Property.updateOne(
		{ _id: req.body._id },
		{
			$set: {
				name: name,
				price: price,
				location: location,
				bedroom: bedroom,
				bathroom: bathroom,
				description: description,
				email: email,
				phone: phone,
			},
		}
	);

	res.send("property updated.");
});

module.exports = router;
