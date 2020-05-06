import React from "react";
import { WarningContainer, WarningPopUp, WarningContent } from "./styles/mobileWarningStyles";
import {
	Bar,
	Title,
	ExitButton,
	ButtonText,
} from "../windowBar/styles/windowBarStyle";

export default function MobileWarning(props) {
	const { warning, setWarning } = props;
	return (
		<WarningContainer shown={warning}>
			<WarningPopUp>
				<Bar>
					<Title>Information</Title>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setWarning(false);
						}}>
						<ExitButton>
							<ButtonText>&#215;</ButtonText>
						</ExitButton>
					</button>
				</Bar>
        <WarningContent></WarningContent>
			</WarningPopUp>
		</WarningContainer>
	);
}
