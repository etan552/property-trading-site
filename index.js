const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const property = require("./routes/property");
const uploadImg = require("./routes/uploadImg");
const login = require("./routes/login");
const registerUser = require("./routes/registerUser");

app.use(express.json());
app.use(cors());

app.use("/api/property", property);
app.use("/api/uploadImg", uploadImg);
app.use("/api/login", login);
app.use("/api/register-user", registerUser);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose
	.connect("mongodb://localhost/property-trading-db", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to db...");
	})
	.catch((err) => console.log(err));

const port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log(`Listening to port ${port}...`);
});
