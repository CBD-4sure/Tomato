import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Body />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
