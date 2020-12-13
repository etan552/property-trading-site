import React, { Component } from "react";
import axios from "axios";
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

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};

	handleSumbit = async (e) => {
		e.preventDefault();

		const url = `${process.env.REACT_APP_API_ENDPOINT}/register-user`;
		const payload = this.state.account;
		try {
			const res = await axios.post(url, payload);
			localStorage.setItem("token", res.headers["x-auth-token"]);
			this.props.onLogin(res.headers["x-auth-token"]);

			window.location.replace("/");
		} catch (ex) {
			console.log(ex.response.data);
		}
	};
	render() {
		const { onLogin } = this.props;
		return (
			<Form width={{ width: "300px" }}>
				<div className="form-header">Register User</div>
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
