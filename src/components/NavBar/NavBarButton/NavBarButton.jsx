import React from "react";
import "./NavBarButton.css";
const NavBar = (props) => {
	return (
		<div
			className="nav-bar-button-container"
			onClick={() => {
				props.setAppView(props.name);
			}}
		>
			{props.name}
		</div>
	);
};

export default NavBar;
