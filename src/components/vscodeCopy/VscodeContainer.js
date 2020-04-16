import React from "react";

// Components
import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "../windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

// Styles
import { CodeContainer } from "./components/styles/codeContainerStyle";



export default function VscodeContainer() {
	return (
		<CodeContainer>
			<WindowsBar title={"currentFile.js - richannyNguonPortfolio - Ghibli Studio Code"}/>
			<FileNavBar />
			<MainViewport />
			<BottomUtilityBar />
		</CodeContainer>
	);
}
