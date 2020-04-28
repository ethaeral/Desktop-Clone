// Libraries
import React, { useContext } from "react";

// Styles
import {
	Bar,
	Title,
	WindowOptions,
	CircleButtons,
	ButtonText,
	MaxWindow,
	ExitButton,
} from "./styles/windowBarStyle";

// Context
import WindowsContext from "../../modules/windowContext";


export default function WindowControls(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const { title, type, tabbedTitle } = props;
	return (
		<Bar>
			<Title>{title}</Title>
			<WindowOptions>
				<button
					onClick={(e) => {
						e.stopPropagation()
						setWindowState({
							...statefulWindows,
							tabbedWindows: [
								...statefulWindows.tabbedWindows,
								{ tabbedTitle, type },
							],
							[type]: {
								...[type],
								minimized: true,
								maximized: false,
								closed: false,
							},
						});
					}}>
					<CircleButtons>
						<ButtonText>&#8722;</ButtonText>
					</CircleButtons>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation()
						setWindowState({
							...statefulWindows,
							[type]: {
								...[type],
								maximized: !statefulWindows[type].maximized,
								minimized: false,
								closed: false,
								active: true,
							},
						});
					}}>
					<CircleButtons>
						<MaxWindow> </MaxWindow>
					</CircleButtons>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation()
						setWindowState({
							...statefulWindows,
							[type]: {
								...[type],
								maximized: false,
								minimized: false,
								closed: true,
							},
						});
					}}>
					<ExitButton>
						<ButtonText>&#215;</ButtonText>
					</ExitButton>
				</button>
			</WindowOptions>
		</Bar>
	);
}
