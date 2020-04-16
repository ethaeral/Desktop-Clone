import React, { useEffect, useContext } from "react";
import { TabBox } from "./styles/tabStyle";
import {
	ButtonText,
	Title,
	CircleButtons,
	ExitButton,
} from "../../../windowBar/styles/windowBarStyle";
import WindowsContext from "../../../../modules/windowContext";

export default function Tab(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const { title, type } = props;
	useEffect(() => {}, []);

	return (
		<TabBox hidden={false}>
			<Title> {title}</Title>
			<button onClick={() => {}}>
				<CircleButtons>
					<ButtonText>&#10138;</ButtonText>
				</CircleButtons>
			</button>
			<button onClick={() => {}}>
				<ExitButton>
					<ButtonText>&#215;</ButtonText>
				</ExitButton>
			</button>
		</TabBox>
	);
}
