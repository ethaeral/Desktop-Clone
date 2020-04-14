import React from "react";

import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "./components/windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

export default function vscodeContainer() {
	return (
		<div>
			<WindowsBar />
			<FileNavBar />
			<MainViewport />
			<BottomUtilityBar />
		</div>
	);
}
