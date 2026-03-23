import React, { useState } from "react";
import { TerminalContainer} from "./styles/terminalOptsStyle";
import {
	terminalEdit,
	terminalFile,
	terminalHelp,
	terminalSearch,
	terminalView,
	terminalTerminal,
} from "../../../../../../data/fileNavBar";
import TerminalButtons from "./components/terminalButtons/TerminalButtons";


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
					<TerminalButtons
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
