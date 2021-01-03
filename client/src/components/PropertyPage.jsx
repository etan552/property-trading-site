import React, { Component } from "react";
import "../view-style/PropertyPage.css";
import MiniProperty from "./common/MiniProperty";

class PropertyPage extends Component {
	render() {
		const { properties } = this.props;

		return (
			<div className="property-container">
				<div className="inner-container">
					{properties.map((property, index) => (
						<MiniProperty property={property} key={index} />
					))}
				</div>
			</div>
		);
	}
}

export default PropertyPage;
