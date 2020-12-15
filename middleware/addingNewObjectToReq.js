function addFilename(req, res, next) {
	req.filename = [];
	next();
}

module.exports = addFilename;
