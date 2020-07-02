import React from "react";
import { TerminalContainer } from "./styles/terminalStyles";
import REPL from "../../../../../../../repl/REPL";

export default function Terminal({clear}) {
	return (
		<TerminalContainer>
			<REPL clear={clear} />
		</TerminalContainer>
	);
}
