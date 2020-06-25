import React, { useContext } from "react";
import { Display } from "./styles/codeDisplayStyles";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";
import CodeTab from "./components/codeTab/CodeTab";
import DisplayCode from "./components/displayCode/DisplayCode";

export default function CodeDisplay() {
	const { currentProject } = useContext(CodeContext);
	return (
		<Display>
			<CodeTab/>
			{currentProject.current ? (
				<p>{currentProject[`${currentProject.current}`].name}</p>
			) : (
				""
			)}
			{/* <DisplayCode /> */}
		</Display>
	);
}
