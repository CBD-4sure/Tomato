import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About";
// import Contact from "./Contact";
import Error from "./Error";
import Body from "./components/Body";
import Menu from "./Menu";
import Shimmer from "./components/Shimmer";
import Cart from "./Cart";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const Contact = lazy(() => import("./Contact"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<Provider store={AppStore}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Body />} />
						<Route path="/about" element={<About />} />
						<Route
							path="/contact"
							element={
								<Suspense fallback={<Shimmer />}>
									<Contact />
								</Suspense>
							}
						/>
						<Route path="/restaurant/:resId" element={<Menu />} />
						<Route path="/cart" element={<Cart />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
