import React, { Component } from "react";
import "../view-style/PropertyPage.css";
import DragNDrop from "./common/DragNDrop";
import MiniProperty from "./common/MiniProperty";

class PropertyPage extends Component {
	state = {};
	render() {
		return (
			<div className="property-container">
				<MiniProperty />
				<DragNDrop />
			</div>
		);
	}
}

export default PropertyPage;
