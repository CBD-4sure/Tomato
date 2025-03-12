import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";

const appRouter = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<RouterProvider router={appRouter} />
	</StrictMode>
);
