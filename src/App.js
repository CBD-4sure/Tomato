/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router";
import Header from "./components/Header";

export default function App() {
	return (
		<div id="home" className="flex flex-col items-center bg-orange-40">
			<Header />
			<Outlet />
			<div>
				<a href="https://github.com/CBD-4sure/Tomato">Source link</a>
			</div>
		</div>
	);
}
