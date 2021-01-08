import React, { Component } from "react";
import MiniProperty from "./common/MiniProperty";
import PropertyDeleteAlertBox from "./PropertyDeleteAlertBox";

class PropertyMini extends Component {
	state = {
		showAlertBox: false,
	};

	handleToggleAlertBox = () => {
		const showAlertBox = !this.state.showAlertBox;
		this.setState({ showAlertBox });
	};

	render() {
		const {
			property,
			onDelete,
			onDisplayProps,
			onSelect,
			index,
		} = this.props;

		return (
			<React.Fragment>
				<PropertyDeleteAlertBox
					property={property}
					onDelete={onDelete}
					showAlertBox={this.state.showAlertBox}
					onToggleAlertBox={this.handleToggleAlertBox}
				/>
				<MiniProperty property={property} />
				<div style={{ float: "right" }}>
					<button
						className="manage-prop-item-btn edit-btn"
						onClick={() => {
							onSelect(index);
							onDisplayProps();
						}}
					>
						Edit
					</button>
					<button
						className="manage-prop-item-btn delete-btn"
						onClick={() => {
							this.handleToggleAlertBox();
						}}
					>
						Delete
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default PropertyMini;
