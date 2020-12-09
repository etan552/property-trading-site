import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../view-style/CategoryBar.css";

class CategoryBar extends Component {
	state = {};
	render() {
		return (
			<div className="category-container">
				<div className="cate category-header">Property Type</div>
				<div>
					<Link className="cate category-item" to="">
						All Properties
					</Link>
				</div>
				<div>
					<Link className="cate category-item" to="">
						Apartments
					</Link>
				</div>
				<div>
					<Link className="cate category-item" to="">
						Houses
					</Link>
				</div>
				<div>
					<Link className="cate category-item" to="">
						Rental
					</Link>
				</div>
			</div>
		);
	}
}

export default CategoryBar;
