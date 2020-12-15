import React, { Component } from "react";
import "../view-style/Home.css";
import CategoryBar from "./CategoryBar";
import PropertyPage from "./PropertyPage";
import "../view-style/Home.css";

class Home extends Component {
	state = {};
	render() {
		const { properties } = this.props;
		return (
			<div className="home-container">
				<CategoryBar />
				<PropertyPage properties={properties} />
			</div>
		);
	}
}

export default Home;
