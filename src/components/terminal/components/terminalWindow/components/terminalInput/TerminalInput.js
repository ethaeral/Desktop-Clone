import React from "react";
import { Input } from "./styles/terminalInStyles";
import REPL from "../../../../../repl/REPL";

export default function TerminalInput({clear}) {
	return (
		<Input>
			<REPL clear={clear} />
		</Input>
	);
}
