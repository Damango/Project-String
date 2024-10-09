import React from "react";
import "./ProjectCard.css";
import { useState } from "react";
const ProjectCard = (props) => {
	return (
		<div
			className="project-card"
			onClick={() => {
				props.setAppView("project-view");
			}}
		>
			<div className="project-settings-button">:</div>
			<p className="project-name">Project Name</p>
			<p className="project-author">PM: John Doe</p>
			<div className="progress-container">
				<span className="progress-text">15 / 20 Tasks completed</span>
				<div className="progress-bar">
					<div className="progress-bar-fill" style={{ width: "75%" }}></div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
