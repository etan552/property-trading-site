import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
