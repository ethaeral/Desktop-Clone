import React from "react";
import WindowBar from "../../../windowBar/WindowBar";
import TerminalOptions from "./components/terminalOptions/TerminalOptions";
import { TerminalWindowContainer } from "./styles/terminalWindowStyle";

export default function TerminalWindow() {
	return (
		<TerminalWindowContainer>
			<WindowBar
				title={`vistor@guest:~`}
				type={"terminal"}
				tabbedTitle={"Terminal"}
			/>
			<TerminalOptions />
		</TerminalWindowContainer>
	);
}
