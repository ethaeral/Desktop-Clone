import React from "react";
import WindowBar from '../../../windowBar/WindowBar'
import TerminalOptions from "./components/terminalOptions/TerminalOptions";

export default function TerminalWindow() {
	return (
		<div>
			<WindowBar title={`vistor@guest:~`}/>
			<TerminalOptions />
		</div>
	);
}
