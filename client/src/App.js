import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import RegisterProperty from "./components/RegisterProperty";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route
						path="/register-property"
						component={RegisterProperty}
					/>
					<Route path="/register-user" component={RegisterUser} />
					<Route path="/login" component={Login} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
