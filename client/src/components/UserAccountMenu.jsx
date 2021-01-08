import React, { Component } from "react";
import "../view-style/ClientRelated.css";
import dummyImg from "../assets/bathtub.svg";
import { Link } from "react-router-dom";

class UserAccountMenu extends Component {
	state = { menuDisplay: true };

	menu = React.createRef();

	componentDidMount() {
		this.props.getRef(this.menu);
	}

	render() {
		const { userAccMenu, onLogout, user, properties } = this.props;
		return (
			<div
				className={
					userAccMenu
						? "user-acc-menu-container"
						: "user-acc-menu-container hidden"
				}
				ref={this.menu}
			>
				<div className="user-acc-img user-acc-details">
					<img src={dummyImg} alt="userImg" />
				</div>
				<div className="user-acc-name user-acc-details">
					{user.name}
				</div>
				<div className="user-acc-email user-acc-details">
					{user.email}
				</div>
				<div className="user-acc-details">
					<button className="user-acc-btn manage-acc">
						Manage Account
					</button>
				</div>
				<div className="horizontal-line" />
				<div className="user-acc-prop-num user-acc-details">
					Properties registered: {properties.length}
				</div>
				<div className="user-acc-prop-details user-acc-details">
					Max number of properties is 8.
				</div>
				<div className="user-acc-details">
					<Link to="/register-property">
						<button className="user-acc-btn manage-prop">
							New Property
						</button>
					</Link>
				</div>
				<div
					className="user-acc-details"
					style={{ margin: "5px 0 5px 0" }}
				>
					<Link to="/manage-property">
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
