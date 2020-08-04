import React, { useContext } from "react";
import { ExtSideContainer } from "./styles/extStyle";
import SectionsDividers from "../sectionsDividers/SectionsDividers";
import { WindowsContext } from "../../../../../../../../modules/windowContext";
import Recommended from "./component/Recommended";
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
				component={Recommended}
				openState={true}
				bubbleText={"0"}
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
