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
		try {
			const res = await axios.post(url, payload);
			localStorage.setItem("token", res.headers["x-auth-token"]);
			this.props.onLogin(res.headers["x-auth-token"]);
			console.log(res.data);

			window.location.replace("/");
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	render() {
		return (
			<Form width={{ width: "300px" }}>
				<div className="form-header">Login</div>
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
