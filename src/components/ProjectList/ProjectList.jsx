import React, { useState } from "react";
import "./ProjectList.css";
import ProjectCard from "../ProjectCard/ProjectCard";
const ProjectList = (props) => {
	const [projectsList, setProjectsList] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
	]);

	return (
		<div className="project-list-container">
			<div className="project-list">
				{projectsList.map(() => (
					<ProjectCard setAppView={props.setAppView} />
				))}
			</div>
		</div>
	);
};

export default ProjectList;
