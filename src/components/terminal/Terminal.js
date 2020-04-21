import React, { useContext } from "react";

import TerminalInput from "./components/terminalWindow/components/terminalInput/TerminalInput";
import TerminalWindow from "./components/terminalWindow/TerminalWindow";
import { Window } from "./styles/terminalStyle";
import WindowsContext from "../../modules/windowContext";

export default function Terminal() {
	const { statefulWindows } = useContext(WindowsContext);
	return (
		<Window
			hidden={
				statefulWindows.terminal.minimized || statefulWindows.terminal.closed
			}
			maximized={statefulWindows.terminal.maximized}
			>
			<TerminalWindow />
			<TerminalInput />
		</Window>
	);
}
