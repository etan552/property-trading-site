const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads/");
	},
	filename: (req, file, cb) => {
		cb(
			null,
			new Date().toISOString().replace(/:/g, "-") + file.originalname
		);
	},
});

const upload = multer({ storage: storage });

router.post("/", upload.single("propertyImage"), (req, res) => {
	console.log("files");
	console.log(req.file);
	res.send(req.file);
});

module.exports = router;
