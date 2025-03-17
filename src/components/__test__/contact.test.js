import { render, screen } from "@testing-library/react";
import Contact from "../../Contact";
import React from "react";
import "@testing-library/jest-dom";

it("should render component", () => {
	render(<Contact />);

	const heading = screen.getByRole("heading");
	expect(heading).t
});
