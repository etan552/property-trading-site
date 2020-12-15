const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "..", "uploads"));
	},
	filename: (req, file, cb) => {
		const fileName =
			new Date().toISOString().replace(/:/g, "-") + file.originalname;

		req.filename.push(fileName);
		cb(null, fileName);
	},
});
const upload = multer({ storage: storage });

module.exports = upload;
