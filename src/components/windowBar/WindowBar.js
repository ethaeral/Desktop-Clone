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
	return (
		<Bar>
			<Title>{props.title}</Title>
			<WindowOptions>
				<a href='#1'>
					<CircleButtons>
						<ButtonText>&#8722;</ButtonText>
					</CircleButtons>
				</a>
				<a href='#2'>
					<CircleButtons>
						<MaxWindow> </MaxWindow>
					</CircleButtons>
				</a>
				<a href='#3'>
					<ExitButton>
						<ButtonText>&#215;</ButtonText>
					</ExitButton>
				</a>
			</WindowOptions>
		</Bar>
	);
}
