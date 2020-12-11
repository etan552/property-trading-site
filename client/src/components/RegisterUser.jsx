import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./common/Form";
import FormInput from "./common/FormInput";
import "../view-style/ClientRelated.css";
import "../view-style/Form.css";

class RegisterUser extends Component {
	state = {
		account: {
			name: "",
			email: "",
			password: "",
		},
	};
	render() {
		return (
			<Form width={{ width: "300px" }}>
				<div className="form-header" style={{ color: "white" }}>
					Register User
				</div>
				<div className="form-container-inner login-form-grid">
					<FormInput
						style={{ style: "reg-user-grid-name" }}
						name="name"
						label="Name"
						onChange={this.handleChange}
						desc="Enter a name."
					/>
					<FormInput
						style={{ style: "reg-user-grid-email" }}
						name="email"
						label="Email"
						onChange={this.handleChange}
						desc="Enter an email address."
					/>
					<FormInput
						style={{ style: "reg-user-grid-password" }}
						name="password"
						label="Password"
						onChange={this.handleChange}
						desc="Enter a password."
					/>
					<button
						className="form-btn reg-user-grid-btn"
						onClick={this.handleSumbit}
					>
						Login
					</button>
				</div>
			</Form>
		);
	}
}

export default RegisterUser;
