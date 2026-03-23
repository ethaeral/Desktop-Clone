import React, { useState } from "react";
import NavButton from "./components/navButton/NavButton";
import { NavContainer } from "./styles/fileNavStyles";
import {
	codeEdit,
	codeFile,
	codeGo,
	codeHelp,
	codeRun,
	codeSelection,
	codeTerminal,
	codeView,
} from "../../../../data/fileNavBar";

export default function FileNavBar() {
	const [isActive, setIsActive] = useState(false);
	const options = [
		codeFile,
		codeEdit,
		codeSelection,
		codeView,
		codeGo,
		codeRun,
		codeTerminal,
		codeHelp,
	];
	return (
		<NavContainer>
			{options.map((option) => {
				const title = option[0];
				const tabs = option.slice(1, option.length)
				return (
					<NavButton
						state={isActive}
						setState={setIsActive}
						key={title}
						name={title}
						tabs={tabs}
					/>
				);
			})}
		</NavContainer>
	);
}
