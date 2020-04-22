import React, { useContext } from "react";
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
	const reverseWindows = {
		terminal: "code",
		code: "terminal",
	};
	const otherWindow = reverseWindows[type];
	return (
		<TabBox>
			<Title> {title}</Title>
			<button
				onClick={() => {
					setWindowState({
						...statefulWindows,
						tabbedWindows: statefulWindows.tabbedWindows.filter(
							(entry) => entry.type !== type
						),
						[type]: {
							...statefulWindows[type],
							minimized: false,
							closed: false,
							active: true,
						},
						[otherWindow]: {
							...statefulWindows[otherWindow],
							active: false,
						},
					});
					console.log(statefulWindows);
				}}>
				<CircleButtons>
					<ButtonText>&#10138;</ButtonText>
				</CircleButtons>
			</button>
			<button
				onClick={() => {
					setWindowState({
						...statefulWindows,
						[type]: {
							...statefulWindows[type],
							maximized: false,
							minimized: false,
							closed: true,
						},
						tabbedWindows: statefulWindows.tabbedWindows.filter(
							(entry) => entry.type !== type
						),
					});
				}}>
				<ExitButton>
					<ButtonText>&#215;</ButtonText>
				</ExitButton>
			</button>
		</TabBox>
	);
}
