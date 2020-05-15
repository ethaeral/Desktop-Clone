import React from "react";
import { ExtSideContainer } from "./styles/extStyle";
import SectionsDividers from "../sectionsDividers/SectionsDividers";

export default function Ext(props) {
	return (
		<ExtSideContainer active={props.active}>
			<SectionsDividers
				title={"ENABLED"}
				component={ExtSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"RECOMENDED"}
				component={ExtSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"DISABLED"}
				component={ExtSideContainer}
				openState={true}
			/>
		</ExtSideContainer>
	);
}
