import React, { useContext } from "react";
import { CodeTabBar } from "./styles/codeTabStyles";
import { CodeContext } from "../../../../../../../../../../../../modules/codeContext";
import TabbedFile from "./components/tabbedFile/TabbedFile";

export default function CodeTab({width}) {
	const { currentProject } = useContext(CodeContext);
	return (
		<CodeTabBar width={width}>
			{currentProject.tab.map((p) => (
				<TabbedFile
					project={currentProject[`${p}`]}
					current={currentProject.current}></TabbedFile>
			))}
		</CodeTabBar>
	);
}
