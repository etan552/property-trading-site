import React, { Component } from "react";
import "../view-style/ClientRelated.css";
import dummyImg from "../assets/bathtub.svg";
import { Link } from "react-router-dom";

class UserAccountMenu extends Component {
	state = {};
	render() {
		const { userAccMenu, onLogout } = this.props;

		return (
			<div
				className={
					userAccMenu
						? "user-acc-menu-container"
						: "user-acc-menu-container hidden"
				}
			>
				<div className="user-acc-img user-acc-details">
					<img src={dummyImg} alt="user image" />
				</div>
				<div className="user-acc-name user-acc-details">abc123</div>
				<div className="user-acc-email user-acc-details">
					abc@gmail.com
				</div>
				<div className="user-acc-details">
					<button className="user-acc-btn manage-acc">
						Manage Account
					</button>
				</div>
				<div className="horizontal-line" />
				<div className="user-acc-prop-num user-acc-details">
					Properties registered: 1
				</div>
				<div className="user-acc-prop-details user-acc-details">
					Max number of properties is 10.
				</div>
				<div className="user-acc-details">
					<button className="user-acc-btn manage-prop">
						New Property
					</button>
				</div>
				<div
					className="user-acc-details"
					style={{ margin: "5px 0 5px 0" }}
				>
					<Link to="/register-property">
						<button className="user-acc-btn manage-prop">
							Manage Properties
						</button>
					</Link>
				</div>
				<div className="horizontal-line" />
				<div className="user-acc-details">
					<button
						className="user-acc-btn manage-prop"
						onClick={onLogout}
					>
						Logout
					</button>
				</div>
			</div>
		);
	}
}

export default UserAccountMenu;
