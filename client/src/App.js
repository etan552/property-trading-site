import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwtdecode from "jwt-decode";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RegisterProperty from "./components/RegisterProperty";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";

class App extends Component {
	state = {
		// jwtToken: null,
	};

	componentDidMount() {
		try {
			const token = localStorage.getItem("token");
			const user = jwtdecode(token);
			this.setState({ user });
		} catch (ex) {}
	}

	handleOnLogin = (token) => {
		const jwtToken = token;
		console.log("testing onlogin");
		this.setState({ jwtToken });
	};

	render() {
		const { user } = this.state;

		return (
			<div>
				<Navbar user={user} />
				<Switch>
					<Route
						path="/register-property"
						component={RegisterProperty}
					/>
					<Route
						path="/register-user"
						render={(props) => (
							<RegisterUser
								{...props}
								onLogin={this.handleOnLogin}
							/>
						)}
					/>
					<Route
						path="/login"
						render={(props) => (
							<Login {...props} onLogin={this.handleOnLogin} />
						)}
					/>
					<Route path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
