// Libraries
import React from "react";

// Styles
import {
	ProjectsSideContainer,
	TopBar,
	SectionHolder,
} from "./styles/projectsStyles";

// Components
import SectionsDividers from "../sectionsDividers/SectionsDividers";

// Assets
import ProjectActions from "../../../../../../../../assets/utilityBar/ProjectActions.png";
import ProjectCollaspe from "../../../../../../../../assets/utilityBar/ProjectCollaspe.png";
import ProjectFolderCollaspe from "../../../../../../../../assets/utilityBar/ProjectFolderCollaspe.png";
import ProjectFolderFile from "../../../../../../../../assets/utilityBar/ProjectFolderFile.png";
import ProjectFolderProject from "../../../../../../../../assets/utilityBar/ProjectFolderProject.png";
import ProjectOpenEditorExit from "../../../../../../../../assets/utilityBar/ProjectOpenEditorExit.png";
import ProjectOpenEditorSave from "../../../../../../../../assets/utilityBar/ProjectOpenEditorSave.png";
import ProjectOpenEditorToggle from "../../../../../../../../assets/utilityBar/ProjectOpenEditorToggle.png";
import ProjectRefresh from "../../../../../../../../assets/utilityBar/ProjectRefresh.png";
import ProjectTimelinePin from "../../../../../../../../assets/utilityBar/ProjectTimelinePin.png";

export default function Projects(props) {
	return (
		<ProjectsSideContainer active={props.active}>
			<TopBar>
				<h3>EXPLORER</h3>
			</TopBar>

			<SectionHolder>
				<SectionsDividers
					firstChild={true}
					title={"OPEN EDITORS"}
					component={ProjectsSideContainer}
					openState={true}
					icons={[
						{
							src: ProjectOpenEditorToggle,
							message: "Toggle Verticle/Horizontal Editor Layout (Shift+Alt+0)",
						},
						{ src: ProjectOpenEditorSave, message: "Save All (Alt+A)" },
						{
							src: ProjectOpenEditorExit,
							message: "Close All Editiors (Ctrl+K Ctrl+W)",
						},
					]}
				/>
				<SectionsDividers
					title={"PORTFOLIO"}
					component={ProjectsSideContainer}
					openState={true}
					icons={[
						{ src: ProjectFolderFile, message: "New File" },
						{ src: ProjectFolderProject, message: "New Folder" },
						{ src: ProjectRefresh, message: "Refresh Explorer" },
						{
							src: ProjectFolderCollaspe,
							message: "Collaspe Folders in Explorer",
						},
					]}
				/>
				<SectionsDividers
					title={"OUTLINE"}
					component={ProjectsSideContainer}
					openState={true}
					icons={[
						{ src: ProjectCollaspe, message: "Collaspe All" },
						{ src: ProjectActions, message: "More Actions..." },
					]}
				/>
				<SectionsDividers
					title={"TIMELINE"}
					component={ProjectsSideContainer}
					openState={true}
					icons={[
						{ src: ProjectTimelinePin, message: "Pin the Current Timeline" },
						{ src: ProjectRefresh, message: "Refresh" },
						{ src: ProjectActions, message: "More Actions..." },
					]}
				/>
				<SectionsDividers
					lastChild={true}
					title={"NPM SCRIPTS"}
					component={ProjectsSideContainer}
					openState={true}
					icons={[
						{ src: ProjectRefresh, message: "Refresh" },
						{ src: ProjectCollaspe, message: "Collaspe All" },
					]}
				/>
			</SectionHolder>
		</ProjectsSideContainer>
	);
}
