// Libraries
import React, { useContext } from "react";

// Context
import { WindowsContext } from "../../../../../../../../../../modules/windowContext";

export default function Portfolio() {
	const { statefulWindows } = useContext(WindowsContext);
	return (
		<div>
			{statefulWindows.projects.map((project) => (
				<p>{project.name}</p>
			))}
		</div>
	);
}
