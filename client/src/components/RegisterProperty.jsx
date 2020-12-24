import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import Form from "./common/Form";
import "../view-style/ClientRelated.css";
import FormInput from "./common/FormInput";
import FormTextArea from "./common/FormTextArea";
import DragNDrop from "./common/DragNDrop";

class RegisterProperty extends Component {
	state = {
		propertyDetails: {
			name: "",
			price: null,
			description: "",
			bedroom: null,
			bathroom: null,
			location: "",
			email: "",
			phone: "",
		},
		jwtToken: "",
		uploadFile: {},
	};

	componentDidMount() {
		const jwtToken = localStorage.getItem("token");
		this.setState({ jwtToken });
	}

	handleChange = ({ currentTarget: input }) => {
		const propertyDetails = { ...this.state.propertyDetails };
		propertyDetails[input.name] = input.value;
		this.setState({ propertyDetails });
	};

	handleDropFile = (file) => {
		const uploadFile = file;
		this.setState({ uploadFile });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const fd = new FormData();

		for (let key in this.state.propertyDetails) {
			fd.append(key, this.state.propertyDetails[key]);
		}

		_.forEach(this.state.uploadFile, (file) => {
			fd.append("propertyDetails", file);
		});

		const url = `${process.env.REACT_APP_API_ENDPOINT}/property`;

		try {
			const { data } = await axios.post(url, fd, {
				headers: {
					"Content-Type": "multipart/form-data",
					"x-auth-token": `${this.state.jwtToken}`,
				},
			});
			window.location.reload();
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	render() {
		return (
			<Form width={{ width: "840px" }}>
				<div className="form-header">Property Details Form</div>
				<div className="form-container-inner reg-form-grid">
					<FormInput
						style={{ style: "reg-property-name" }}
						name="name"
						label="Name"
						onChange={this.handleChange}
						desc="Please enter property name."
					/>
					<FormInput
						style={{ style: "reg-property-email" }}
						name="email"
						label="Email"
						onChange={this.handleChange}
						desc="Please enter an email address."
					/>
					<FormInput
						style={{ style: "reg-property-phone" }}
						name="phone"
						label="Phone number"
						onChange={this.handleChange}
						desc="Please enter a phone number."
					/>

					<FormInput
						style={{ style: "reg-property-price" }}
						name="price"
						label="Price"
						onChange={this.handleChange}
						desc="Please enter property price."
					/>
					<FormInput
						style={{ style: "reg-property-bedroom" }}
						name="bedroom"
						label="Bedroom"
						onChange={this.handleChange}
						desc="Number of bedroom(s)."
					/>
					<FormInput
						style={{ style: "reg-property-bathroom" }}
						name="bathroom"
						label="Bathroom"
						onChange={this.handleChange}
						desc="Number of bathroom(s)."
					/>
					<FormTextArea
						style={{ style: "reg-property-location" }}
						name="location"
						label="Location"
						onChange={this.handleChange}
						desc="Please enter property location."
					/>

					<FormTextArea
						style={{ style: "reg-property-desc" }}
						name="description"
						label="Description"
						onChange={this.handleChange}
						desc="Please enter property description."
					/>
					<div className="dnd-form">
						<label htmlFor="">Property image</label>
						<DragNDrop onDrop={this.handleDropFile} />
					</div>
					<button className="form-btn" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
			</Form>
		);
	}
}

export default RegisterProperty;
