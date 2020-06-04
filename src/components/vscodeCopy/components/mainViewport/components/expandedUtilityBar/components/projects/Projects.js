// Libraries
import React, { useState, useRef, useEffect } from "react";

// Styles
import {
	ProjectsSideContainer,
	TopBar,
	SectionHolder,
} from "./styles/projectsStyles";

// Components
import SectionsDividers from "../sectionsDividers/SectionsDividers";
import NpmScripts from "./components/npmScripts/NpmScripts";
import Portfolio from "./components/portfolio/Portfolio";
import Outline from "./components/outline/Outline";
import Timeline from "./components/timeline/Timeline";
import OpenEditors from "./components/openEditors/OpenEditors";


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
	const [height, setHeight] = useState(null);
	const componentRef = useRef(null);

	useEffect(() => {
		const height = componentRef.current.clientHeight;
		setHeight(height-110);
	}, []);
	return (
		<ProjectsSideContainer active={props.active} ref={componentRef}>
			<TopBar>
				<h3>EXPLORER</h3>
			</TopBar>

			<SectionHolder>
				<SectionsDividers
					height={height * 0.2}
					firstChild={true}
					title={"OPEN EDITORS"}
					component={OpenEditors}
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
					height={height*0.4}
					title={"PORTFOLIO"}
					component={Portfolio}
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
					height={height * 0.1}
					title={"OUTLINE"}
					component={Outline}
					openState={true}
					icons={[
						{ src: ProjectCollaspe, message: "Collaspe All" },
						{ src: ProjectActions, message: "More Actions..." },
					]}
				/>
				<SectionsDividers
					height={height * 0.1}
					title={"TIMELINE"}
					component={Timeline}
					openState={true}
					icons={[
						{ src: ProjectTimelinePin, message: "Pin the Current Timeline" },
						{ src: ProjectRefresh, message: "Refresh" },
						{ src: ProjectActions, message: "More Actions..." },
					]}
				/>
				<SectionsDividers
					height={height * 0.1}
					lastChild={true}
					title={"NPM SCRIPTS"}
					component={NpmScripts}
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
