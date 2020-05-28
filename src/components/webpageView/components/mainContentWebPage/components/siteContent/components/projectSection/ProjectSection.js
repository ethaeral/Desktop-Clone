// Libraries
import React, { useContext } from "react";

// Styles
import { ProjectSecConatiner } from "./styles/projectStyles";

// Context
import {WindowsContext} from "../../../../../../../../modules/windowContext";

// Components
import ProjectItem from "./components/projectItem/ProjectItem";

export default function ProjectSection() {
	const { statefulWindows } = useContext(WindowsContext);
	return (
		<ProjectSecConatiner>
			{statefulWindows.webPageProjects.map((projectData) => (
				<ProjectItem key={projectData.name} data={projectData} />
			))}
		</ProjectSecConatiner>
	);
}
