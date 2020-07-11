import React, { useContext, useRef, useState, useEffect } from "react";
import { Display } from "./styles/codeDisplayStyles";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";
import CodeTab from "./components/codeTab/CodeTab";
import DisplayCode from "./components/displayCode/DisplayCode";
import Welcome from "../codeDisplay/components/displayCode/components/releaseNotes/ReleaseNotes";
import Code from "./components/displayCode/components/Code";

export default function CodeDisplay() {
	const { currentProject } = useContext(CodeContext);
	const [width, setWidth] = useState(0);
	const displayRef = useRef(null);
	useEffect(() => {
		setWidth(displayRef.current.offsetWidth);
	}, [displayRef]);
	return (
		<Display ref={displayRef}>
			<CodeTab width={width} />
			<DisplayCode
				component={
					currentProject[`${currentProject.current}`].name === "Welcome"
						? Welcome
						: Code
				}
				data={currentProject}
			/>
		</Display>
	);
}
