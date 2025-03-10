/* eslint-disable react/react-in-jsx-scope */
import logo from "../assets/image.png"
export default function Header(){
	return (
		<div className="header">
            <div className="logo">
                <img src={logo} alt="logo" style={{'width': '100%','height':'100%','objectFit':'cover'} }></img>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="search"></input>
                <button>Search</button>
            </div>
            <div className="login">
                <a>Login</a>
            </div>
		</div>
	);
};

