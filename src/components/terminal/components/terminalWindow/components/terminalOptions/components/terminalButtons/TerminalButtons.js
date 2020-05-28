import React, { useContext } from "react";
import {
	TerminalButtonContainer,
	TerminalOptionButton,
	ListDropDown,
} from "./styles/terminalButtonStyle";
import { WindowsContext } from "../../../../../../../../modules/windowContext";
import TerminalListOption from "./components/terminalListOption/TerminalListOption";

export default function TerminalButtons(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<TerminalButtonContainer active={props.state}>
			<TerminalOptionButton
				onClick={() => {
					props.setState(true);
				}}>
				{props.name}
			</TerminalOptionButton>
			<ListDropDown>
				{props.tabs.map((obj) => {
					return (
						<TerminalListOption
							state={statefulWindows}
							setState={setWindowState}
							cb={obj.callback}
							active={obj.active}
							key={obj.actionTitle}
							actionTitle={obj.actionTitle}
							shortCut={obj.shortCut}
						/>
					);
				})}
			</ListDropDown>
		</TerminalButtonContainer>
	);
}
