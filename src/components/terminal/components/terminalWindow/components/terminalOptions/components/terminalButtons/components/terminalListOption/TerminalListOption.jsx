import React from "react";
import { TerminalItem } from "./styles/terminalListStyle";

export default function TerminalListOption(props) {
	const { state, setState, cb, active, actionTitle, shortCut } = props;
	return (
		<TerminalItem
    active={active}
    onClick={(e) => {
			e.stopPropagation()
      cb ? cb(state, setState) : console.log();
    }}
    >
			<div>{actionTitle}</div>
			<div>{shortCut}</div>
		</TerminalItem>
	);
}
