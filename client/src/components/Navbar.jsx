import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../view-style/Navbar.css";
import UserAccountMenu from "./UserAccountMenu";

class Navbar extends Component {
	state = {
		userAcc: false,
		userAccRef: null,
	};

	componentDidMount() {
		document.addEventListener("click", this.handleClickOutside, true);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.handleClickOutside, true);
	}

	handleClickOutside = (e) => {
		if (
			this.state.userAccRef &&
			!this.state.userAccRef.current.contains(e.target)
		) {
			this.setState({ userAcc: false });
		}
	};

	handleGetRef = (userAccRef) => {
		this.setState({ userAccRef });
	};

	handleLogout = () => {
		localStorage.removeItem("token");
		window.location.replace("/");
	};

	handleToggleUserAcc = () => {
		const userAcc = !this.state.userAcc;
		this.setState({ userAcc });
	};

	render() {
		const { user } = this.props;

		return (
			<div className="navbar">
				<div className="nav-container">
					<div className="nav-item">
						<Link
							className="nav-item-link"
							style={{ borderStyle: "none" }}
							to="/"
						>
							Home
						</Link>
					</div>
					{!user ? (
						<div className="nav-item">
							<Link className="nav-item-link" to="/login">
								Login
							</Link>
						</div>
					) : (
						<div className="nav-item">
							<div
								className="user-acc"
								onClick={this.handleToggleUserAcc}
							>
								Account
							</div>
							<UserAccountMenu
								getRef={this.handleGetRef}
								userAccMenu={this.state.userAcc}
								onLogout={this.handleLogout}
								user={user}
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Navbar;
