import React, { useContext, useState } from "react";
import {
	ChangedSectContainer,
	Change,
	TitleContainer,
	Path,
	FileContainer,
	Numbered,
	Grouped,
} from "./branchComponentStyles";
import { WindowsContext } from "../../../../../../../../../modules/windowContext";
import {
	FileDiv,
	SelectionIcon,
	FolderDiv,
} from "../../selection/styles/selectionStyles";
import jsInactive from "../../../../../../../../../assets/utilityBar/projects/jsInactive.png";
import closed from "../../../../../../../../../assets/notExpand.png";
import open from "../../../../../../../../../assets/isExpand.png";
import { CodeContext } from "../../../../../../../../../modules/codeContext";
export default function ChangedSection() {
	const { statefulWindows } = useContext(WindowsContext);
	const { currentProject, setCurrentProject } = useContext(CodeContext);
	const { inProgress } = statefulWindows;
	const [isOpen, setIsOpen] = useState(true);
	return (
		<ChangedSectContainer>
			<FolderDiv isOpen='flex' justify="space-between">
				<button
					className='FolderButton Change'
					onClick={() => {
						setIsOpen(!isOpen);
					}}>
					<Grouped>
						<SelectionIcon
							className='action'
							isOpen={isOpen}
							inactive={closed}
							openInactive={open}
						/>
						<Change>CHANGES</Change>
					</Grouped>
					<Numbered>
						<p>{inProgress.length}</p>
					</Numbered>
				</button>
			</FolderDiv>
			<FileContainer isOpen={isOpen}>
				{inProgress.length > 0
					? inProgress.map((r) => (
							<FileDiv isOpen={"flex"}>
								<button
									className='FileButton'
									onClick={(e) => {
										setCurrentProject({ ...currentProject, current: r.name });
									}}>
									<SelectionIcon className='file' inactive={jsInactive} />
									<TitleContainer>
										<p>{r.name}.js</p>
										<Path>
											src/{r.name}/{r.name}.js
										</Path>
									</TitleContainer>
								</button>
							</FileDiv>
					  ))
					: ""}
			</FileContainer>
		</ChangedSectContainer>
	);
}
