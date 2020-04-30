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
					const addCounter = statefulWindows.zCounter++;
					setWindowState({
						...setWindowState,
						zCounter: addCounter,
					});
					setWindowState({
						...statefulWindows,
						tabbedWindows: statefulWindows.tabbedWindows.filter(
							(entry) => entry.type !== type
						),
						[type]: {
							...statefulWindows[type],
							minimized: false,
							closed: false,
							z: statefulWindows.zCounter,
						},
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
