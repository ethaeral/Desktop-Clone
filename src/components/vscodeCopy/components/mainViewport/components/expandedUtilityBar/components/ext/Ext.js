import React, { useContext } from "react";
import { ExtSideContainer, BubbleNum } from "./styles/extStyle";
import SectionsDividers from "../sectionsDividers/SectionsDividers";
import { WindowsContext } from "../../../../../../../../modules/windowContext";
export default function Ext(props) {
	const { statefulWindows } = useContext(WindowsContext);
	const { exts } = statefulWindows;
	return (
		<ExtSideContainer active={props.active}>
			<SectionsDividers
				title={"ENABLED"}
				component={ExtSideContainer}
				openState={true}
				bubbleText={"0"}
			/>

			<SectionsDividers
				title={"RECOMENDED"}
				component={ExtSideContainer}
				openState={true}
				bubbleText={exts.length}
			/>

			<SectionsDividers
				title={"DISABLED"}
				component={ExtSideContainer}
				openState={true}
				bubbleText={"0"}
			/>
		</ExtSideContainer>
	);
}
