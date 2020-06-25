import React, { useContext } from "react";
import { CodeTabBar } from "./styles/codeTabStyles";
import { CodeContext } from "../../../../../../../../../../../../modules/codeContext";

export default function CodeTab() {
	const { currentProject } = useContext(CodeContext);
	return (
		<CodeTabBar>
			wassup
			{currentProject.current ? (
				<p>{currentProject[`${currentProject.current}`].name}</p>
			) : (
				""
			)}
		</CodeTabBar>
	);
}
