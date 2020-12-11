import React, { Component } from "react";
import "../../view-style/DragNDrop.css";
import logo from "../../assets/upload.svg";

class DragNDrop extends Component {
	state = { dragging: false };

	dndField = React.createRef();
	dragCounter = 0;

	componentDidMount() {
		let abc = this.dndField.current;
		abc.addEventListener("dragenter", this.handleDragIn);
		abc.addEventListener("dragleave", this.handleDragOut);
		abc.addEventListener("dragover", this.handleDrag);
		abc.addEventListener("drop", this.handleDrop);
	}
	componentWillUnmount() {
		let abc = this.dndField.current;
		abc.removeEventListener("dragenter", this.handleDragIn);
		abc.removeEventListener("dragleave", this.handleDragOut);
		abc.removeEventListener("dragover", this.handleDrag);
		abc.removeEventListener("drop", this.handleDrop);
	}

	handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	handleDragIn = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.dragCounter++;

		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			this.setState({ dragging: true });
		}
	};
	handleDragOut = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.dragCounter--;

		if (this.dragCounter === 0) {
			this.setState({ dragging: false });
		}
	};
	handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState({ dragging: false });

		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			// this.handleDropFile(e.dataTransfer.files);
			// this.setState({ uploadFile: e.dataTransfer.files });
			this.props.onDrop(e.dataTransfer.files);
			e.dataTransfer.clearData();
			this.dragCounter = 0;
		}
	};

	// handleFileSelector = (e) => {
	// 	const uploadFile = e.target.files;
	// 	this.setState({ uploadFile });
	// };

	render() {
		return (
			<div>
				<div className="dnd-field" ref={this.dndField}>
					<div>
						<div>Drop Here</div>
						<img className="uploadImg" src={logo} alt="upload" />
					</div>
					{this.state.dragging && (
						<div className="dragged-over"></div>
					)}
				</div>
			</div>
		);
	}
}

export default DragNDrop;
