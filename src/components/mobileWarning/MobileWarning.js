import React, { useEffect } from "react";
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

import Info from '../../assets/info.png'

export default function MobileWarning(props) {
	const { warning, setWarning } = props;
	useEffect(() => {}, [warning]);
	return (
		<WarningContainer shown={warning}>
			<WarningPopUp>
				<Bar>
					<Title>Information</Title>
					<button
						className='cursor'
						onClick={(e) => {
							e.stopPropagation();
							setWarning(false);
						}}>
						<ExitButton>
							<ButtonText>&#215;</ButtonText>
						</ExitButton>
					</button>
				</Bar>
				<WarningContent>
					<WarningText>
          <img src={Info} alt="info icon"/>
						Unable to load full application.
						Resolution width must be larger than 767px.
					</WarningText>
					<button
						className='cursor'
						onClick={(e) => {
							e.stopPropagation();
							setWarning(false);
						}}>
						OK
					</button>
				</WarningContent>
			</WarningPopUp>
		</WarningContainer>
	);
}
