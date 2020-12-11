import React, { Component } from "react";
import "../../view-style/Form.css";

class FormTextArea extends Component {
	state = {};
	render() {
		const { name, label, onChange, desc, style } = this.props;
		return (
			<div className={`form-input-group ${style.style}`}>
				<label htmlFor={name}>{label}</label>
				<textarea
					id={name}
					className="form-text-area"
					name={name}
					onChange={onChange}
					type="text"
				/>
				<small style={{ margin: "0px", fontWeight: "400" }}>
					{desc}
				</small>
			</div>
		);
	}
}

export default FormTextArea;
