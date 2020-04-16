import React from "react";
import WindowControls from "./components/windowControls/WindowControls";
import TerminalOptions from "./components/terminalOptions/TerminalOptions";

export default function TerminalWindow() {
	return (
		<div>
			<WindowControls />
			<TerminalOptions />
		</div>
	);
}
