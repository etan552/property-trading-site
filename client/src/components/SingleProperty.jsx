import React, { Component } from "react";
import _ from "lodash";
import "../view-style/SingleProperty.css";
import placeholderImg from "../assets/placeholder-2.png";

class SingleProperty extends Component {
	state = { selectedImg: 0 };

	handleSelect = (index) => {
		const selectedImg = index;
		this.setState({ selectedImg });
	};

	render() {
		const { properties } = this.props;
		const { selectedImg } = this.state;
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
										className="main-img"
										src={`${imgEndpoint}/${imgFilename[selectedImg]}`}
										alt="abc"
									/>
								</div>
								<div className="single-prop-small-img">
									{imgFilename.map((filename, index) => (
										<div
											className={
												selectedImg === index
													? "small-img-container selectedImg"
													: "small-img-container"
											}
											key={index}
										>
											<img
												className="small-img"
												src={`${imgEndpoint}/${filename}`}
												alt="smallImg"
												onClick={() =>
													this.handleSelect(index)
												}
											/>
										</div>
									))}
								</div>
							</React.Fragment>
						) : (
							<React.Fragment>
								<div className="single-prop-main-img">
									<img
										className="main-img"
										src={placeholderImg}
										alt="placeholderImg"
									/>
								</div>
								<div className="single-prop-small-img">
									<div className="small-img-container selectedImg">
										<img
											className="small-img"
											src={placeholderImg}
											alt="mini-placeholderImg"
										/>
									</div>
								</div>
							</React.Fragment>
						)}

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
