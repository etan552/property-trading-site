import React, { Component } from "react";
import _ from "lodash";
import "../view-style/SingleProperty.css";
import dummyImg from "../assets/bathtub.svg";

class SingleProperty extends Component {
	state = {};

	render() {
		const { properties } = this.props;
		const property = _.filter(
			properties,
			(property) => property._id === this.props.match.params.id
		);

		if (property.length > 0) {
			const imgFilename = property[0].imageFileName;
			const imgEndpoint = `${process.env.REACT_APP_API_ENDPOINT}/images`;

			return (
				<div className="single-prop-container">
					<div className="single-prop-header">{property[0].name}</div>
					<div className="single-prop-container-inner">
						{imgFilename.length > 0 ? (
							<React.Fragment>
								<div className="single-prop-main-img">
									<img
										src={`${imgEndpoint}/${imgFilename[0]}`}
										alt="abc"
									/>
								</div>
								<div className="single-prop-small-img">
									{imgFilename.map((filename, index) => (
										<img
											key={index}
											className="small-img"
											src={`${imgEndpoint}/${filename}`}
											alt="dummyImg"
										/>
									))}
								</div>
							</React.Fragment>
						) : null}

						<div className="single-prop-details-container">
							<div className="single-prop-detail-group">
								<div className="single-prop-details-header">
									Location
								</div>
								<p>{property[0].location}</p>
							</div>
							<div className="single-prop-detail-group">
								<div className="single-prop-details-header">
									Price
								</div>
								<p>NZ${property[0].price}</p>
							</div>
							<div className="single-prop-detail-group">
								<div className="single-prop-details-header">
									Floor Area
								</div>
								<p>20,000 square feet</p>
							</div>
							<div className="single-prop-detail-group">
								<div className="single-prop-details-header">
									Email Address
								</div>
								<p>{property[0].email}</p>
							</div>
							<div className="single-prop-detail-group">
								<div className="single-prop-details-header">
									Moblie No.
								</div>
								<p>{property[0].phone}</p>
							</div>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}
}

export default SingleProperty;
