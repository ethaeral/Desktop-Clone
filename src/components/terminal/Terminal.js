import React from "react";

import TerminalInput from "./components/terminalWindow/components/terminalInput/TerminalInput";
import TerminalWindow from "./components/terminalWindow/TerminalWindow";
import { Window } from "./styles/terminalStyle";



export default function Terminal() {
	return (
		<Window>
			<TerminalWindow />
      <TerminalInput/>
		</Window>
	);
}
