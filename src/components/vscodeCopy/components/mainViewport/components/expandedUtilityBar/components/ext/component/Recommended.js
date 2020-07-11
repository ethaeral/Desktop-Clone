import React, { useContext } from "react";
import { WindowsContext } from "../../../../../../../../../modules/windowContext";
import ExtSelect from "./ExtSelect";
import { CodeContext } from "../../../../../../../../../modules/codeContext";
export default function Recommended() {
	const { statefulWindows } = useContext(WindowsContext);
	const { currentProject, setCurrentProject } = useContext(CodeContext);
	const { exts } = statefulWindows;
	return (
		<div>
			{exts.map((p) => (
				<ExtSelect
					currentProject={currentProject}
					setCurrentProject={setCurrentProject}
					linkGithub={p.linkGithub}
					icon={p.media}
					name={p.name}
					version={p.version}
					description={p.description}
				/>
			))}
		</div>
	);
}
