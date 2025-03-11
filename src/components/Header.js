/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import logo from "../assets/image.png";
export default function Header() {
	const [btnLogin, setBtnLogin] = useState("Login");

	return (
		<div className="header">
			<div className="logo">
				<img
					src={logo}
					alt="logo"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				></img>
			</div>
			
			<div className="login">
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
	);
}
