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
			active={statefulWindows.terminal.active}
			onClick={(e) => {
				setWindowState({
					...statefulWindows,
					code: {
						...statefulWindows.code,
						active: false,
					},
					terminal: { ...statefulWindows.terminal, active: true },
				});
			}}>
			<TerminalWindow />
			<TerminalInput />
		</Window>
	);
}
