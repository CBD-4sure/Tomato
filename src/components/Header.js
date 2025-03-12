/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import logo from "../assets/image.png";
import { Link } from "react-router";

export default function Header() {
	const [btnLogin, setBtnLogin] = useState("Login");

	return (
		<div className="header">
			<div className="logo">
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

			<div className="login">
				<div>
					<Link to={"/"}>Home</Link>
				</div>
				<div>
					<Link to={"/contact"}>Contact</Link>
				</div>
				<div>
					<Link to={"/about"}>About</Link>
				</div>
				<div>
					<button
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
