import React, { Component } from "react";

class Property extends Component {
	state = {};
	render() {
		const {
			showAlertBox,
			onToggleAlertBox,
			onDelete,
			property,
		} = this.props;

		let className;

		if (showAlertBox === true) {
			className = "alert-box-container";
		} else if (showAlertBox === false) {
			className = "alert-box-container hidden";
		}

		return (
			<div className={className}>
				<div className="alert-box">
					<div>Are you sure you want to delete this property?</div>
					<div style={{ float: "right" }}>
						<button
							className="manage-prop-item-btn alert-cancel-btn"
							onClick={() => onToggleAlertBox()}
						>
							No
						</button>
						<button
							type="submit"
							className="manage-prop-item-btn alert-save-btn"
							onClick={() => {
								onDelete(property);
								onToggleAlertBox();
							}}
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Property;
