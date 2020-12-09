import React, { Component } from "react";
import axios from "axios";

class DragNDrop extends Component {
	state = { uploadFile: null };

	handleFileSelector = (e) => {
		const uploadFile = e.target.files;
		this.setState({ uploadFile });
	};

	handleUploadFile = async () => {
		for (let i = 0; i < this.state.uploadFile.length; i++) {
			const fd = new FormData();
			fd.append("propertyImage", this.state.uploadFile[i]);

			const URL = `${process.env.REACT_APP_API_ENDPOINT}/uploadImg`;
			const data = await axios.post(URL, fd, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		}
		// console.log(this.state.uploadFile.length);
	};

	render() {
		return (
			<div>
				<input
					type="file"
					name="propertyImage"
					onChange={this.handleFileSelector}
					multiple
				></input>
				<button onClick={this.handleUploadFile}>Upload</button>
			</div>
		);
	}
}

export default DragNDrop;
