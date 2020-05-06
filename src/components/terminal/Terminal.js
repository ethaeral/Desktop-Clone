import React, { useContext } from "react";

import TerminalInput from "./components/terminalWindow/components/terminalInput/TerminalInput";
import TerminalWindow from "./components/terminalWindow/TerminalWindow";
import { Window } from "./styles/terminalStyle";
import WindowsContext from "../../modules/windowContext";

export default function Terminal(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<Window
			none={props.none}
			hidden={
				statefulWindows.terminal.minimized || statefulWindows.terminal.closed
			}
			maximized={statefulWindows.terminal.maximized}
			z={statefulWindows.terminal.z}
			onClick={(e) => {
				setWindowState({
					...setWindowState,
					zCounter: statefulWindows.zCounter + 1,
				});
				setWindowState({
					...statefulWindows,
					terminal: {
						...statefulWindows.terminal,
						z: statefulWindows.zCounter,
					},
				});
			}}>
			<TerminalWindow />
			<TerminalInput />
		</Window>
	);
}
