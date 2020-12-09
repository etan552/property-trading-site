const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

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

router.post("/", upload.any("propertyImage"), (req, res) => {
	console.log("files successfully uploaded.");

	res.send("files successfully uploaded.");
});

module.exports = router;
