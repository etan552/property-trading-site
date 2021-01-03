import React, { Component } from "react";
import MiniProperty from "./common/MiniProperty";

class PropertyMini extends Component {
	state = {};
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
						onClick={() => onDelete(property)}
					>
						Delete
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default PropertyMini;
