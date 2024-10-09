import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import ToDoListView from "./components/ToDoListView/ToDoListView";
import ProjectView from "./components/ProjectView/ProjectView";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
	const [count, setCount] = useState(0);
	const [appView, setAppView] = useState("dashboard");

	function updateAppViewState() {}
	return (
		<>
			<div className="app-container">
				<NavBar setAppView={setAppView} />
				<div className="main-view-container">
					{appView === "dashboard" ? (
						<Dashboard />
					) : appView === "todo-list" ? (
						<ToDoListView />
					) : appView === "projects" ? (
						<ProjectList setAppView={setAppView} />
					) : appView === "project-view" ? (
						<ProjectView />
					) : null}
				</div>
			</div>
		</>
	);
}

export default App;
