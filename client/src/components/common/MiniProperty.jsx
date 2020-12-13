import React, { Component } from "react";
import "../../view-style/MiniProperty.css";
import dummyImg from "../../assets/upload.svg";
import bedroomImg from "../../assets/bed.svg";
import bathroomImg from "../../assets/bathtub.svg";

class MiniProperty extends Component {
	state = {};
	render() {
		const { name, price, location, bedroom, bathroom } = this.props;
		return (
			<div className="mini-container">
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
				{/* <div className="mini-property-name">3 bedroom apartment</div>

				<div className="mini-property-price">RM 200,000</div>
				<div className="mini-property-bed">
					<img src={bedroomImg} alt="bedrooms" />3
				</div>
				<div className="mini-property-bath">
					<img src={bathroomImg} alt="bathrooms" />2
				</div>

				<div className="mini-property-location">
					21 whitaker pl, grafton, auckland 1010, new zealand
				</div> */}
			</div>
		);
	}
}

export default MiniProperty;
