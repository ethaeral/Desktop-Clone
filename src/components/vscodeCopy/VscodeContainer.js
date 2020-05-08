// Libraries
import React, { useContext, useEffect } from "react";

// Components
import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "../windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

// Styles
import { CodeContainer } from "./styles/codeContainerStyle";

// Context
import WindowsContext from "../../modules/windowContext";

export default function VscodeContainer(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<CodeContainer
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
					...setWindowState,
					zCounter: addCounter,
				});
				setWindowState({
					...statefulWindows,
					code: {
						...statefulWindows.code,
						z: statefulWindows.zCounter,
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
			<MainViewport />
			<BottomUtilityBar />
		</CodeContainer>
	);
}
