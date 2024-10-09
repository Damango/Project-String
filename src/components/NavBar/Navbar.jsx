import React from "react";
import "./NavBar.css";
import NavBarButton from "./NavBarButton/NavBarButton";

const NavBar = (props) => {
	return (
		<div className="nav-bar-container">
			<div className="nav-bar-header"></div>
			<div className="nav-bar-body">
				<NavBarButton name="dashboard" setAppView={props.setAppView} />
				<NavBarButton name="todo-list" setAppView={props.setAppView} />
				<NavBarButton name="projects" setAppView={props.setAppView} />
			</div>
			<div className="nav-bar-footer"></div>
		</div>
	);
};

export default NavBar;
