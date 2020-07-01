import React from "react";
import { Input } from "./styles/terminalInStyles";
import REPL from "../../../../../repl/REPL";

export default function TerminalInput() {
	return (
		<Input>
			<REPL />
		</Input>
	);
}
