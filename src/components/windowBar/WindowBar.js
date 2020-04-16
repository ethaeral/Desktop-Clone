import React from "react";

import {
	Bar,
	Title,
	WindowOptions,
	CircleButtons,
	ButtonText,
	MaxWindow,
	ExitButton,
} from "./styles/windowBarStyle";

export default function WindowControls(props) {
	const { title, type } = props;
	return (
		<Bar>
			<Title>{title}</Title>
			<WindowOptions>
				<button onClick={() => {}}>
					<CircleButtons>
						<ButtonText>&#8722;</ButtonText>
					</CircleButtons>
				</button>
				<button onClick={() => {}}>
					<CircleButtons>
						<MaxWindow> </MaxWindow>
					</CircleButtons>
				</button>
				<button onClick={() => {}}>
					<ExitButton>
						<ButtonText>&#215;</ButtonText>
					</ExitButton>
				</button>
			</WindowOptions>
		</Bar>
	);
}
