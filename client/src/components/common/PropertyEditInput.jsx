import React, { Component } from "react";
import PropertyEditAlertBox from "../PropertyEditAlertBox";
import editImg from "../../assets/edit.svg";

class PropertyEditInput extends Component {
	state = {
		showAlertBox: false,
		property: {
			name: "",
			price: null,
			description: "",
			bedroom: null,
			bathroom: null,
			location: "",
			email: "",
			phone: "",
		},
	};

	handleShowAlertBox = () => {
		const showAlertBox = true;
		this.setState({ showAlertBox });
	};

	handleHideAlertBox = () => {
		this.setState({ showAlertBox: false });
	};

	handleChange = ({ currentTarget: input }) => {
		const property = { ...this.state.property };
		property[input.name] = input.value;
		this.setState({ property });
	};

	render() {
		const { property, showAlertBox } = this.state;
		const { name, label, value, onEdit, selectedProperty } = this.props;

		return (
			<div className="manage-prop-edit-group">
				<div className="manage-prop-edit-header">{label}</div>
				<div className="manage-prop-edit-body">
					<span>{value}</span>
					<img
						onClick={this.handleShowAlertBox}
						className="manage-prop-edit-img"
						src={editImg}
						alt="edit button"
					/>
				</div>
				<PropertyEditAlertBox
					property={property}
					onEdit={onEdit}
					showAlertBox={showAlertBox}
					name={name}
					label={label}
					selectedProperty={selectedProperty}
					onChange={this.handleChange}
					onHideAlertBox={this.handleHideAlertBox}
				/>
			</div>
		);
	}
}

export default PropertyEditInput;
