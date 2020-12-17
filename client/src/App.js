import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import jwtdecode from "jwt-decode";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RegisterProperty from "./components/RegisterProperty";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import SingleProperty from "./components/SingleProperty";

class App extends Component {
	state = {
		properties: [],
	};

	async componentDidMount() {
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property`;
		try {
			const { data } = await axios.get(url);
			this.setState({ properties: data });
		} catch (ex) {
			console.log(`${ex} Error when getting properties`);
		}

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
		const { user, properties } = this.state;

		return (
			<div>
				<Navbar user={user} />
				<Switch>
					<Route
						path="/register-property"
						component={RegisterProperty}
					/>
					<Route
						path="/single-property/:id"
						render={(props) => (
							<SingleProperty
								{...props}
								properties={properties}
							/>
						)}
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
					<Route
						exact
						path="/"
						render={(props) => (
							<Home {...props} properties={properties} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
