import React from "react";
import { ModalTabControlContainer } from "./styles/modalTabControlStyles";
import {
	CircleButtons,
	ButtonText,
	ExitButton,
} from "../../../../../windowBar/styles/windowBarStyle";

export default function ModalTabControls(props) {
	const { statefulWindows, setWindowState } = props;
	return (
		<ModalTabControlContainer>
			<button
				className='modalButton'
				onClick={(e) => {
					e.stopPropagation();
					setWindowState({
						...statefulWindows,
						modalIsOpen: { ...statefulWindows.modalIsOpen, tabbedBar: true },
					});
				}}>
				<CircleButtons>
					<ButtonText>&#10138;</ButtonText>
				</CircleButtons>

				<ExitButton>
					<ButtonText>&#215;</ButtonText>
				</ExitButton>
			</button>
		</ModalTabControlContainer>
	);
}
