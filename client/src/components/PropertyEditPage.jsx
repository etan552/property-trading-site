import axios from "axios";
import React, { Component } from "react";
import "../view-style/ClientRelated.css";
import "../view-style/PropertyEdit.css";
import MiniProperty from "./common/MiniProperty";
import jwtdecode from "jwt-decode";

class PropertyEditPage extends Component {
	state = {};
	async componentDidMount() {
		const token = localStorage.getItem("token");
		const user = jwtdecode(token);
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property/${user._id}`;

		const { data: properties } = await axios.get(url);
		this.setState({ properties, user });
	}

	handleDelete = async (property) => {
		const user = this.state.user;
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property/${user._id}/${property._id}`;

		const { data } = await axios.delete(url);
		window.location.reload();
	};

	render() {
		const { properties } = this.state;
		return (
			<div className="manage-prop-container">
				<div className="form-header">Edit your properties</div>
				<div className="manage-prop-items-container">
					{properties &&
						properties.map((property, index) => (
							<div className="manage-prop-item" key={index}>
								<MiniProperty property={property} />
								<div style={{ float: "right" }}>
									<button className="manage-prop-item-btn edit-btn">
										Edit
									</button>
									<button
										className="manage-prop-item-btn delete-btn"
										onClick={() =>
											this.handleDelete(property)
										}
									>
										Delete
									</button>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default PropertyEditPage;
