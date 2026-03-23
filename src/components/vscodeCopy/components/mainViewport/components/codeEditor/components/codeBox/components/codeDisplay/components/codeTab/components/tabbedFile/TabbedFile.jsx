import React, { useContext } from "react";
import { TabbedFileContainer } from "./styles/tabbedFileStyles";
import { SelectionIcon } from "../../../../../../../../../expandedUtilityBar/components/selection/styles/selectionStyles";
import { CodeContext } from "../../../../../../../../../../../../../../modules/codeContext";

import XTabAcitve from "../../../../../../../../../../../../../../assets/utilityBar/projects/xTabActive.png";
import JSTabActive from "../../../../../../../../../../../../../../assets/utilityBar/projects/JSTabActive.png";
import JSTabInactive from "../../../../../../../../../../../../../../assets/utilityBar/projects/JSTabInactive.png";
import TabWindowActive from "../../../../../../../../../../../../../../assets/utilityBar/projects/TabWindowActive.png";
import TabWindowInactive from "../../../../../../../../../../../../../../assets/utilityBar/projects/TabWindowInactive.png";
import Preview from "../../../../../../../../../../../../../../assets/utilityBar/preview.png";
export default function TabbedFile({ project, current, preview }) {
	const { currentProject, setCurrentProject } = useContext(CodeContext);
	return (
		<TabbedFileContainer
			onClick={() => {
				setCurrentProject({
					...currentProject,
					current: project.name,
				});
			}}
			active={project.name === current}
			inactive={XTabAcitve}>
			<SelectionIcon
				isActive={project.name === current}
				inactive={
					preview
						? Preview
						: project.name === "Welcome"
						? TabWindowActive
						: JSTabActive
				}
				active={
					preview
						? Preview
						: project.name === "Welcome"
						? TabWindowInactive
						: JSTabInactive
				}
				className='fileIcon'
			/>
			{project.name === "Welcome"
				? preview
					? `Preview ${project.name}`
					: project.name
				: preview
				? `Preview ${project.name}.js`
				: `${project.name}.js`}
			<SelectionIcon
				onClick={(e) => {
					e.stopPropagation();
					const newTab = currentProject.tab.filter((r) => {
						return r !== project.name;
					});
					if (newTab.length > 0) {
						setCurrentProject({
							...currentProject,
							current: newTab[newTab.length - 1],
							tab: currentProject.tab.filter((r) => {
								return r !== project.name;
							}),
						});
					} else {
						setCurrentProject({
							...currentProject,
							tab: [],
							current: undefined,
						});
					}
				}}
				editor={"none"}
				hover={XTabAcitve}
				className='action editor'
				inactive={XTabAcitve}
			/>
		</TabbedFileContainer>
	);
}
