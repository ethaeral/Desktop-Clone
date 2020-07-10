import React, { useContext } from "react";
import { CodeTabBar } from "./styles/codeTabStyles";
import { CodeContext } from "../../../../../../../../../../../../modules/codeContext";

export default function CodeTab() {
	const { currentProject } = useContext(CodeContext);
	return (
		<CodeTabBar>
			{currentProject.tab.map((p)=><p>{currentProject[`${p}`].name}</p>)}
		</CodeTabBar>
	);
}
