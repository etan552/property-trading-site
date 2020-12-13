import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../view-style/Navbar.css";

class Navbar extends Component {
	state = {};

	handleLogout = () => {
		localStorage.removeItem("token");
		window.location.replace("/");
	};
	render() {
		const { user } = this.props;
		return (
			<div className="navbar">
				<div className="nav-container">
					<Link style={{ borderStyle: "none" }} to="/">
						<div className="nav-item">Home</div>
					</Link>
					{!user && (
						<Link to="/login">
							<div className="nav-item">Login</div>
						</Link>
					)}
					{user && (
						<React.Fragment>
							<Link to="register-property">
								<div className="nav-item">Add property</div>
							</Link>
							<Link to="#">
								<div
									className="nav-item"
									onClick={this.handleLogout}
								>
									Logout
								</div>
							</Link>
						</React.Fragment>
					)}
				</div>
			</div>
		);
	}
}

export default Navbar;
