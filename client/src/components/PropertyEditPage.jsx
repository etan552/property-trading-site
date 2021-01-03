import axios from "axios";
import React, { Component } from "react";
import "../view-style/ClientRelated.css";
import "../view-style/PropertyEdit.css";
import jwtdecode from "jwt-decode";
import PropertyEditDetails from "./PropertyEditDetails";
import PropertyMini from "./PropertyMini";

class PropertyEditPage extends Component {
	state = {
		properties: null,
		selectedProperty: 0,
		displayPropsDetails: false,
	};

	async componentDidMount() {
		const token = localStorage.getItem("token");
		const user = jwtdecode(token);
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property/${user._id}`;

		const { data: properties } = await axios.get(url);
		this.setState({ properties, user, token });
	}

	handleDelete = async (property) => {
		const user = this.state.user;
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property/${user._id}/${property._id}`;

		try {
			await axios.delete(url, {
				headers: { "x-auth-token": this.state.token },
			});
			window.location.reload();
		} catch (ex) {
			console.error(ex.response.data);
		}
	};

	handleSaveToDb = async (property) => {
		const url = `${process.env.REACT_APP_API_ENDPOINT}/property`;
		try {
			await axios.put(url, property, {
				headers: { "x-auth-token": this.state.token },
			});
			window.location.reload();
		} catch (ex) {
			console.error(ex.response.data);
		}
	};

	handleDisplayPropsDetailsEdit = () => {
		const displayPropsDetails = !this.state.displayPropsDetails;
		this.setState({ displayPropsDetails });
	};

	handleSelectProperty = (index) => {
		// update selectedProperty value
		this.setState({ selectedProperty: index });
	};

	render() {
		const {
			properties,
			selectedProperty,
			displayPropsDetails,
		} = this.state;
		// if (properties) console.log(selectedProperty);
		return (
			<div className="manage-prop-container">
				<div className="form-header">Edit your properties</div>
				{/* <div style={{ display: "flex" }}> */}
				<div className="manage-prop-items-container">
					{properties &&
						properties.map((property, index) => (
							<div
								className="manage-prop-item"
								onClick={() => this.handleSelectProperty(index)}
								key={index}
							>
								<PropertyMini
									index={index}
									property={property}
									onSelect={this.handleSelectProperty}
									onDelete={this.handleDelete}
									onDisplayProps={
										this.handleDisplayPropsDetailsEdit
									}
								/>
							</div>
						))}
				</div>
				{properties && (
					<PropertyEditDetails
						displayProps={displayPropsDetails}
						properties={properties}
						selectedProperty={selectedProperty}
						onDisplayProps={this.handleDisplayPropsDetailsEdit}
						onSave={this.handleSaveToDb}
						// onEdit={this.handleSaveToDb}
					/>
				)}
				{/* </div> */}
			</div>
		);
	}
}

export default PropertyEditPage;
