import React, { Component } from "react";
import "../../view-style/AlertBox.css";

class AlertBox extends Component {
	state = {};

	inputField = React.createRef();

	handleClearField = () => {
		const inputField = this.inputField.current;
		inputField.value = "";
	};

	render() {
		const {
			showAlertBox,
			onHideAlertBox,
			onChange,
			name,
			label,
			onEdit,
			property,
			selectedProperty,
		} = this.props;

		let className = "alert-box-container hidden";

		if (showAlertBox === true) {
			className = "alert-box-container";
		} else if (showAlertBox === false) {
			className = "alert-box-container hidden";
		}

		return (
			<div className={className}>
				<div className="alert-box">
					<label
						htmlFor={name}
					>{`Please enter a new ${label}`}</label>
					<input
						className="form-input alert-input"
						type="text"
						ref={this.inputField}
						id={name}
						name={name}
						onChange={onChange}
					/>
					<div style={{ float: "right" }}>
						<button
							className="manage-prop-item-btn alert-cancel-btn"
							onClick={() => onHideAlertBox()}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="manage-prop-item-btn alert-save-btn"
							onClick={() => {
								onEdit(property[name], name, selectedProperty);
								onHideAlertBox();
								this.handleClearField();
							}}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AlertBox;
