import React, { useContext } from "react";
import ListItem from "./components/listItems/ListItem";
import {
	ButtonContainer,
	DropDown,
	OptionButton,
} from "./styles/navButtonStyle";

import {WindowsContext} from "../../../../../../modules/windowContext";

export default function NavButton(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<ButtonContainer active={props.state}>
			<OptionButton
				onClick={() => {
					props.setState(true);
				}}>
				{props.name}
			</OptionButton>
			<DropDown long={props.name === "Selection"}>
				{props.tabs.map((obj) => {
					return (
						<ListItem
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
			</DropDown>
		</ButtonContainer>
	);
}
