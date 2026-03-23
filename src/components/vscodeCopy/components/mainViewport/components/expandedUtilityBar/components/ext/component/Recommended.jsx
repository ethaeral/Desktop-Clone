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
			<p>There are no recommended extensions</p>
			{/* {exts.map((p) => (
				<ExtSelect
					key={`${p.iconRecommend}`}
					currentProject={currentProject}
					setCurrentProject={setCurrentProject}
					linkGithub={p.linkGithub}
					icon={p.icon}
					name={p.name}
					version={p.version}
					description={p.description}
				/>
			))} */}
		</div>
	);
}
