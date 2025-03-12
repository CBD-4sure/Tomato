/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
	return (
		<div id="home">
			<Header />
			<Outlet />
			<div>
				<a href="https://github.com/CBD-4sure/Tomato">Source link</a>
			</div>
		</div>
	);
}
