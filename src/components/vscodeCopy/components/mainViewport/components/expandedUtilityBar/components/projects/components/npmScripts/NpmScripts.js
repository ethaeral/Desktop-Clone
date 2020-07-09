// Libraries
import React, { useState } from "react";
import {
	ChangedSectContainer,
	Change,
	TitleContainer,
	FileContainer,
	Grouped,
} from "./npmStyles";

import {
	FileDiv,
	SelectionIcon,
	FolderDiv,
} from "../../../selection/styles/selectionStyles";
import closed from "../../../../../../../../../../assets/notExpand.png";
import open from "../../../../../../../../../../assets/isExpand.png";
import npm from "../../../../../../../../../../assets/utilityBar/projects/npm.png";
import build from "../../../../../../../../../../assets/utilityBar/projects/build.png";
import start from "../../../../../../../../../../assets/utilityBar/projects/start.png";
export default function NpmScripts() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<ChangedSectContainer>
			<FolderDiv isOpen='flex' justify='space-between'>
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
						<SelectionIcon inactive={npm} />
						<Change>package.json</Change>
					</Grouped>
				</button>
			</FolderDiv>
			<FileContainer isOpen={isOpen}>
				<FileDiv isOpen={"flex"} key={"r.name"}>
					<button className='FileButton' onClick={(e) => {}}>
						<SelectionIcon className='file' inactive={build} />
						<TitleContainer>
							<p>start</p>
              <SelectionIcon hover={start} />
						</TitleContainer>
					</button>
				</FileDiv>
			</FileContainer>
		</ChangedSectContainer>
	);
}
