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
						<MiniProperty
							// _id={property._id}
							// key={property._id}
							// name={property.name}
							// price={property.price}
							// location={property.location}
							// bedroom={property.bedroom}
							// bathroom={property.bathroom}
							property={property}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default PropertyPage;
