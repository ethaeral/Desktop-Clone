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

	return (
		<TabBox>
			<Title> {title}</Title>
			<button
				onClick={() => {
					setWindowState({
						...statefulWindows,
						[type]: {
							...[type],
							minimized: false,
							closed: false,
						},
						tabbedWindows: statefulWindows.tabbedWindows.filter(
							(entry) => entry.type !== type
						),
					});
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
							...[type],
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
