import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import "../view-style/PropertyPage.css";
import MiniProperty from "./common/MiniProperty";

class PropertyPage extends Component {
	state = {
		properties: [],
	};
	async componentDidMount() {
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property`;
		const { data } = await axios.get(url);

		this.setState({ properties: data });
		console.log(data);
	}
	render() {
		const { properties } = this.state;
		console.log(properties);
		return (
			<div className="property-container">
				<div className="inner-container">
					{properties.map((property, index) => (
						<MiniProperty
							key={index}
							name={property.name}
							price={property.price}
							location={property.location}
							bedroom={property.bedroom}
							bathroom={property.bathroom}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default PropertyPage;
