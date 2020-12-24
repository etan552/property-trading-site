import React from "react";
import CategoryBar from "../CategoryBar";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import Home from "../Home";

describe("CategoryBar", () => {
	it("header rendered", () => {
		const { getByText } = render(
			<BrowserRouter>
				<CategoryBar />
			</BrowserRouter>
		);
		getByText(/Property type/i);
	});
	it("all properties tab", () => {
		const { getByText } = render(
			<BrowserRouter>
				<CategoryBar />
			</BrowserRouter>
		);
		getByText(/all properties/i);
	});
	it("apartments tab", () => {
		const { getByText } = render(
			<BrowserRouter>
				<CategoryBar />
			</BrowserRouter>
		);
		getByText(/apartments/i);
	});
	it("houses tab", () => {
		const { getByText } = render(
			<BrowserRouter>
				<CategoryBar />
			</BrowserRouter>
		);
		getByText(/houses/i);
	});
	it("rental tab", () => {
		const { getByText } = render(
			<BrowserRouter>
				<CategoryBar />
			</BrowserRouter>
		);
		getByText(/rental/i);
	});
});
