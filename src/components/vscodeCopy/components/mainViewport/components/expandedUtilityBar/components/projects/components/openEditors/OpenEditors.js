// Libraries
import React, { useContext } from "react";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";
import { Change, Grouped } from "./openStyles";
import XHover from "../../../../../../../../../../assets/utilityBar/projects/xHoverWindow.png";
import jsHover from "../../../../../../../../../../assets/utilityBar/projects/jsHover.png";
import jsInactive from "../../../../../../../../../../assets/utilityBar/projects/jsInactive.png";
import menuWindow from "../../../../../../../../../../assets/utilityBar/projects/menuWindow.png";
import menuWindowHover from "../../../../../../../../../../assets/utilityBar/projects/menuWindowHover.png";

import {
	SelectionIcon,
	FolderDiv,
} from "../../../selection/styles/selectionStyles";
export default function OpenEditors() {
	const { currentProject, setCurrentProject } = useContext(CodeContext);

	return (
		<div>
			{currentProject.tab.map((p) => (
				<FolderDiv
					isOpen='flex'
					justify='space-between'
					inactive={XHover}
					inactiveIcon={p === "Welcome" ? menuWindowHover : jsHover}
					key={`${p}editor`}>
					<button
						className='FolderButton Change'
						onClick={() => {
							setCurrentProject({
								...currentProject,
								current: currentProject[`${p}`].name,
							});
						}}>
						<Grouped>
							<SelectionIcon
								onClick={(e) => {
									e.stopPropagation();
									const newTab = currentProject.tab.filter((r) => {
										return r !== p;
									});
									if (newTab.length > 0) {
										setCurrentProject({
											...currentProject,
											tab: currentProject.tab.filter((r) => {
												return r !== p;
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
								hover={XHover}
								className='action editor'
								inactive={XHover}
							/>
							<SelectionIcon
								inactive={p === "Welcome" ? menuWindow : jsInactive}
								className='fileIcon'
							/>
							<Change>{currentProject[`${p}`].name}</Change>
						</Grouped>
					</button>
				</FolderDiv>
			))}
		</div>
	);
}
