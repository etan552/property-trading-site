import React, { Component } from "react";
import "../view-style/PropertyPage.css";
import MiniProperty from "./common/MiniProperty";

class PropertyPage extends Component {
	state = {};
	render() {
		return (
			<div className="property-container">
				<div className="inner-container">
					<MiniProperty />
					<MiniProperty />
					<MiniProperty />
				</div>
			</div>
		);
	}
}

export default PropertyPage;
