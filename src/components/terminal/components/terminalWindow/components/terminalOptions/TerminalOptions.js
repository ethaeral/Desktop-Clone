import React, { useState } from "react";
import { TerminalContainer, TerminalNavButtons } from "./styles/terminalOptsStyle";
import {
	terminalEdit,
	terminalFile,
	terminalHelp,
	terminalSearch,
	terminalView,
	terminalTerminal,
} from "../../../../../../data/fileNavBar";


export default function TerminalOptions() {
	const [isActive, setIsActive] = useState(false);
	const options = [
		terminalFile,
		terminalEdit,
		terminalView,
		terminalSearch,
		terminalTerminal,
		terminalHelp,
	];
	return (
		<TerminalContainer>
			{options.map((option) => {
				const title = option[0];
				const tabs = option.slice(1, option.length);
				return (
					<TerminalNavButtons
						state={isActive}
						setState={setIsActive}
						key={title}
						name={title}
						tabs={tabs}
					/>
				);
			})}
		</TerminalContainer>
	);
}
