/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router";

export default function Header() {
	const [btnLogin, setBtnLogin] = useState("Login");

	return (
		<div className="flex justify-between w-[1000px] items-center">
			<div className="w-3xs h-28">
				<Link to={"/"}>
					<img
						src={logo}
						alt="logo"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					></img>
				</Link>
			</div>

			<div className="flex">
				<div className="m-2">
					<Link to={"/"}>Home</Link>
				</div>
				<div className="m-2">
					<Link to={"/contact"}>Contact</Link>
				</div>
				<div className="m-2">
					<Link to={"/about"}>About</Link>
				</div>
				<div>
					<button
						className="m-2 w-14"
						onClick={() => {
							btnLogin === "Login"
								? setBtnLogin("Logout")
								: setBtnLogin("Login");
						}}
					>
						{btnLogin}
					</button>
				</div>
			</div>
		</div>
	);
}
