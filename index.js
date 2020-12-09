const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const property = require("./routes/property");
const uploadImg = require("./routes/uploadImg");
const path = require("path");

app.use(express.json());
app.use(cors());

app.use("/api/property", property);
app.use("/api/uploadImg", uploadImg);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log(`Listening to port ${port}...`);
});
