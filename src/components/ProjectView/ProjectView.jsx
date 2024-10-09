// Importing necessary libraries
import React, { useState } from "react";
import "./ProjectView.css";
import TaskWindow from "../TaskWindow/TaskWindow";

const initialData = {
	todo: [
		{ id: "task-1", content: "Task 1" },
		{ id: "task-2", content: "Task 2" },
	],
	inprogress: [{ id: "task-3", content: "Task 3" }],
	stuck: [{ id: "task-4", content: "Task 4" }],
	completed: [{ id: "task-5", content: "Task 5" }],
};

function ProjectView() {
	const [tasks, setTasks] = useState(initialData);
	const [taskWindow, setTaskWindow] = useState(null);

	const onDragStart = (event, taskId, sourceColumn) => {
		event.dataTransfer.setData("taskId", taskId);
		event.dataTransfer.setData("sourceColumn", sourceColumn);
	};

	const onDrop = (event, targetColumn) => {
		const taskId = event.dataTransfer.getData("taskId");
		const sourceColumn = event.dataTransfer.getData("sourceColumn");

		if (sourceColumn === targetColumn) return;

		const sourceTasks = Array.from(tasks[sourceColumn]);
		const targetTasks = Array.from(tasks[targetColumn]);

		const taskIndex = sourceTasks.findIndex((task) => task.id === taskId);
		const [movedTask] = sourceTasks.splice(taskIndex, 1);
		targetTasks.push(movedTask);

		setTasks({
			...tasks,
			[sourceColumn]: sourceTasks,
			[targetColumn]: targetTasks,
		});
	};

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const openTask = (taskId) => {};

	const renderTaskWindow = () => {
		if (!taskWindow) return null;
		return <TaskWindow />;
	};

	return (
		<div className="project-view-container">
			{renderTaskWindow()}
			{Object.keys(tasks).map((columnId) => (
				<div
					key={columnId}
					className="task-column"
					onDrop={(event) => onDrop(event, columnId)}
					onDragOver={onDragOver}
					onClick={() => {
						setTaskWindow("test");
					}}
				>
					<h3 className="column-title">{columnId}</h3>
					{tasks[columnId].map((task) => (
						<div
							key={task.id}
							className="task-card"
							draggable
							onDragStart={(event) => onDragStart(event, task.id, columnId)}
						>
							{task.content}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default ProjectView;
