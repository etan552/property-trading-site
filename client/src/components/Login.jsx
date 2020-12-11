import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "./common/Form";
import FormInput from "./common/FormInput";
import "../view-style/Form.css";

class Login extends Component {
	state = {
		account: {
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

		const url = `${process.env.REACT_APP_API_ENDPOINT}/login`;
		const payload = this.state.account;

		const { data } = await axios.post(url, payload);
		console.log(data);
	};

	render() {
		return (
			<Form width={{ width: "300px" }}>
				<div className="form-header" style={{ color: "white" }}>
					Login
				</div>
				<div className="form-container-inner login-form-grid">
					<FormInput
						style={{ style: "login-grid-email" }}
						name="email"
						label="Email"
						onChange={this.handleChange}
						desc="Enter an email address."
					/>
					<FormInput
						style={{ style: "login-grid-password" }}
						name="password"
						label="Password"
						onChange={this.handleChange}
						desc="Enter a password."
					/>
					<button
						className="form-btn login-grid-btn"
						onClick={this.handleSumbit}
					>
						Login
					</button>
					<Link
						className="login-grid-new-user register-new-user"
						to="/register-user"
					>
						Register a new user.
					</Link>
				</div>
			</Form>
		);
	}
}

export default Login;
