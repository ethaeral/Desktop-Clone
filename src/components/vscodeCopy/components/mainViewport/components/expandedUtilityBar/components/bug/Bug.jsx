import React from "react";
import { BugSideContainer } from "./styles/bugStyles";
import SectionsDividers from "../sectionsDividers/SectionsDividers";

export default function Bug(props) {
	return (
		<BugSideContainer active={props.active}>
			<SectionsDividers
				title={"RUN"}
				component={BugSideContainer}
				openState={true}
			/>
		</BugSideContainer>
	);
}
