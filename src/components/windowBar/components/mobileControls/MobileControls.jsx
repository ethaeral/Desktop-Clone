// Libraries
import React from "react";

import {
	CircleButtons,
	ButtonText,
	MaxWindow,
	ExitButton,
} from "../../styles/windowBarStyle";
import { MobileOptions } from "./styles/mobileControlStyle";

export default function MobileControls(props) {
	const { state, setState } = props;
	return (
		<MobileOptions>
			<button
				className={"mobile"}
				onClick={(e) => {
					e.stopPropagation();
					setState({
						...state,
						modalIsOpen: { ...state.modalIsOpen, windowBar: true },
					});
				}}>
				<CircleButtons>
					<ButtonText>&#8722;</ButtonText>
				</CircleButtons>
				<CircleButtons>
					<MaxWindow> </MaxWindow>
				</CircleButtons>
				<ExitButton>
					<ButtonText>&#215;</ButtonText>
				</ExitButton>
			</button>
		</MobileOptions>
	);
}
