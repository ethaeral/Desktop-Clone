import React, { useContext } from "react";
import { ProjectSecConatiner } from "./styles/projectStyles";
import WindowsContext from "../../../../../../../../modules/windowContext";
import ProjectItem from "./components/projectItem/ProjectItem";

export default function ProjectSection() {
	const { statefulWindows } = useContext(WindowsContext);
	return (
		<ProjectSecConatiner>
			{statefulWindows.webPageProjects.map((projectData) => (
				<ProjectItem data={projectData} />
			))}
		</ProjectSecConatiner>
	);
}
