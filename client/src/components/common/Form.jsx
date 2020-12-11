import React, { Component } from "react";
import "../../view-style/Form.css";

class Form extends Component {
	state = {};
	render() {
		const { children, width } = this.props;
		return (
			<div className="form-container">
				<form className="forms" style={width}>
					{children}
				</form>
			</div>
		);
	}
}

export default Form;
