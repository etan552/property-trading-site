import React, { Component } from "react";
import "../../view-style/MiniProperty.css";
import dummyImg from "../../assets/upload.svg";
import bedroomImg from "../../assets/bed.svg";
import bathroomImg from "../../assets/bathtub.svg";

class MiniProperty extends Component {
	handleRedirect = (id) => {
		window.location = `/single-property/${id}`;
	};
	render() {
		const {
			_id,
			name,
			price,
			location,
			bedroom,
			bathroom,
		} = this.props.property;

		return (
			<div
				className="mini-container"
				onClick={() => this.handleRedirect(_id)}
			>
				<img className="mini-img" src={dummyImg} alt="upload" />
				<div className="mini-property-name">{name}</div>

				<div className="mini-property-price">NZ${price}</div>
				<div className="mini-property-bed">
					<img src={bedroomImg} alt="bedrooms" />
					{bedroom}
				</div>
				<div className="mini-property-bath">
					<img src={bathroomImg} alt="bathrooms" />
					{bathroom}
				</div>

				<div className="mini-property-location">{location}</div>
			</div>
		);
	}
}

export default MiniProperty;
