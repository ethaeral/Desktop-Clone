// Libraries
import React, { useContext, useState } from "react";

// Components
import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "../windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

// Styles
import { CodeContainer } from "./styles/codeContainerStyle";

// Context
import { WindowsContext } from "../../modules/windowContext";
import { CodeContext } from "../../modules/codeContext";

import Image from "../../assets/projects/image.png";

export default function VscodeContainer(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const [currentProject, setCurrentProject] = useState(() => {
		let projectState = {
			current: "Welcome",
			tab: ["Welcome"],
			Welcome: { name: "Welcome", media: Image },
		};
		statefulWindows.all.forEach((project) => {
			projectState[`${project.name}`] = { ...project };
		});
		return projectState;
	});

	return (
		<CodeContext.Provider value={{ currentProject, setCurrentProject }}>
			<CodeContainer
				className='vscode'
				ref={props.reference}
				x={statefulWindows.code.x}
				y={statefulWindows.code.y}
				none={props.none}
				hidden={statefulWindows.code.minimized || statefulWindows.code.closed}
				maximized={statefulWindows.code.maximized}
				z={statefulWindows.code.z}
				onClick={() => {
					const addCounter = statefulWindows.zCounter++;
					setWindowState({
						...statefulWindows,
						zCounter: addCounter,
						code: {
							...statefulWindows.code,
							z: addCounter,
						},
						sideNavActive: { ...statefulWindows.sideNavActive, setting: false },
					});
				}}>
				<WindowsBar
					title={"currentFile.js - richanyNguonPortfolio - Ghibli Studio Code"}
					type={"code"}
					tabbedTitle={"Ghibli Studio Code"}
				/>
				<FileNavBar />
				<MainViewport clear={statefulWindows.code.clear} />
				<BottomUtilityBar />
			</CodeContainer>
		</CodeContext.Provider>
	);
}
