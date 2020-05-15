import React from "react";
import { ProjectsSideContainer } from "./styles/projectsStyles";
import SectionsDividers from "../sectionsDividers/SectionsDividers";

export default function Projects(props) {
	return (
		<ProjectsSideContainer active={props.active}>
			<SectionsDividers
				title={"OPEN EDITORS"}
				component={ProjectsSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"PORTFOLIO"}
				component={ProjectsSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"OUTLINE"}
				component={ProjectsSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"TIMELINE"}
				component={ProjectsSideContainer}
				openState={true}
			/>
			<SectionsDividers
				title={"NPM SCRIPTS"}
				component={ProjectsSideContainer}
				openState={true}
			/>
		</ProjectsSideContainer>
	);
}
