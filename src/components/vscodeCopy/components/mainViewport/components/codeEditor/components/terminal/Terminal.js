import React from "react";
import { TerminalContainer, Container } from "./styles/terminalStyles";
import REPL from "../../../../../../../repl/REPL";

import TerminalTop from "../../../../../../../../assets/utilityBar/terminalTop.png";
export default function Terminal({ clear }) {
	return (
		<Container>
			<img src={TerminalTop} alt={"vscode terminal options"} />
			<TerminalContainer>
				<REPL clear={clear} />
			</TerminalContainer>
		</Container>
	);
}
