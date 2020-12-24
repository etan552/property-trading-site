const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const jwtToken = req.headers["x-auth-token"];
	if (!jwtToken) {
		return res.status(400).send("Bad request. Token not provide.");
	}

	try {
		const decodedObj = jwt.verify(jwtToken, process.env.SERVER_SECRET_KEY);
		req.userId = decodedObj._id;
	} catch (ex) {
		return res.status(400).send("Bad request. Invalid token.");
	}

	next();
};
