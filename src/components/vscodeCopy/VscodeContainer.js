import React, { useContext } from "react";

// Components
import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "../windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

// Styles
import { CodeContainer } from "./styles/codeContainerStyle";

import WindowsContext from "../../modules/windowContext";

export default function VscodeContainer() {
	const { statefulWindows } = useContext(WindowsContext);
	console.log(statefulWindows.terminal.maximized)
	return (
		<CodeContainer
			hidden={statefulWindows.code.minimized || statefulWindows.code.closed}
			maximized={statefulWindows.code.maximized}>
			<WindowsBar
				title={"currentFile.js - richannyNguonPortfolio - Ghibli Studio Code"}
				type={"code"}
				tabbedTitle={"Ghibli Studio Code"}
			/>
			<FileNavBar />
			<MainViewport />
			<BottomUtilityBar />
		</CodeContainer>
	);
}
