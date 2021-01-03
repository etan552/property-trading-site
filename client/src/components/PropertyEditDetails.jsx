import React, { Component } from "react";
import PropertyEditInput from "./common/PropertyEditInput";
import { Link } from "react-router-dom";

class PropertyEditDetails extends Component {
	state = {
		properties: [...this.props.properties],
		tempProperties: [...this.props.properties],
	};

	handleEdit = (updatedValue, name, selectedProperty) => {
		const tempProperties = { ...this.state.tempProperties };
		const property = { ...tempProperties[selectedProperty] };
		property[name] = updatedValue;
		tempProperties[selectedProperty] = property;

		this.setState({ tempProperties });
	};

	handleCancel = () => {
		this.props.onDisplayProps();
		this.setState({ tempProperties: { ...this.state.properties } });
	};

	render() {
		const {
			displayProps,
			onDisplayProps,
			selectedProperty,
			onSave,
		} = this.props;

		const property = this.state.tempProperties[selectedProperty];

		if (!property) {
			return (
				<div className="manage-prop-no-prop">
					Please register a property
					<Link
						to="/register-property"
						style={{ paddingLeft: "8px" }}
					>
						here
					</Link>
				</div>
			);
		}

		let className = "";
		if (displayProps) {
			className = "manage-prop-edit-container";
		} else if (!displayProps) {
			className = "manage-prop-edit-container hidden";
		}

		return (
			<div className={className}>
				<div>
					<div className="manage-prop-edit-form-header">
						Please edit your property
					</div>
					<PropertyEditInput
						name="name"
						label="property name"
						value={property.name}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="price"
						label="price"
						value={property.price}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="location"
						label="location"
						value={property.location}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="description"
						label="description"
						value={property.description}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="bedroom"
						label="bedroom(s)"
						value={property.bedroom}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="bathroom"
						label="bathroom(s)"
						value={property.bathroom}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="email"
						label="email"
						value={property.email}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<PropertyEditInput
						name="phone"
						label="phone"
						value={property.phone}
						onEdit={this.handleEdit}
						selectedProperty={selectedProperty}
					/>
					<span className="manage-prop-edit-btn-group">
						<button
							className="manage-prop-item-btn delete-btn"
							onClick={() => {
								this.handleCancel();
								onDisplayProps();
							}}
						>
							Cancel
						</button>
						<button
							className="manage-prop-item-btn edit-btn"
							onClick={() => {
								onDisplayProps();
								onSave(property);
							}}
						>
							Apply
						</button>
					</span>
				</div>
			</div>
		);
	}
}

export default PropertyEditDetails;
