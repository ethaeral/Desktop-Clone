import React, { useContext } from "react";
import { WindowsContext } from "../../../../../../../../../modules/windowContext";
import ExtSelect from "./ExtSelect";
export default function Recommended() {
	const { statefulWindows } = useContext(WindowsContext);
	const { exts } = statefulWindows;
	return (
		<div>
			{exts.map((p) => (
				<ExtSelect
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
