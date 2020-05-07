import React from "react";
import {
	WarningContainer,
	WarningPopUp,
	WarningContent,
	WarningText,
} from "./styles/mobileWarningStyles";
import {
	Bar,
	Title,
	ExitButton,
	ButtonText,
} from "../windowBar/styles/windowBarStyle";

import Info from "../../assets/info.png";

export default function MobileWarning(props) {
	const { state, setState, message } = props;

	return (
		<WarningContainer shown={state} full={props.full}>
			<WarningPopUp>
				<Bar>
					<Title>Information</Title>
					<button
						className='cursor'
						onClick={(e) => {
							e.stopPropagation();
							setState(false);
						}}>
						<ExitButton>
							<ButtonText>&#215;</ButtonText>
						</ExitButton>
					</button>
				</Bar>
				<WarningContent>
					<WarningText>
						<img src={Info} alt='info icon' />
						{message}
					</WarningText>
					<button
						className='cursor'
						onClick={(e) => {
							e.stopPropagation();
							setState(false);
						}}>
						OK
					</button>
				</WarningContent>
			</WarningPopUp>
		</WarningContainer>
	);
}
