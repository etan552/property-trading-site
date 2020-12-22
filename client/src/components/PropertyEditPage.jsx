import React, { Component } from "react";
import "../view-style/ClientRelated.css";
import "../view-style/PropertyEdit.css";
import MiniProperty from "./common/MiniProperty";

class PropertyEditPage extends Component {
	state = {};
	render() {
		return (
			<div className="manage-prop-container">
				<div className="form-header">Edit your properties</div>
				<div className="manage-prop-items-container">
					<div className="manage-prop-item">
						<MiniProperty />
						<div style={{ float: "right" }}>
							<button className="manage-prop-item-btn edit-btn">
								Edit
							</button>
							<button className="manage-prop-item-btn delete-btn">
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PropertyEditPage;
