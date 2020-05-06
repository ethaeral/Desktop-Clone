import React, {useEffect} from "react";
import {
	WarningContainer,
	WarningPopUp,
	WarningContent,
} from "./styles/mobileWarningStyles";
import {
	Bar,
	Title,
	ExitButton,
	ButtonText,
} from "../windowBar/styles/windowBarStyle";

export default function MobileWarning(props) {
  const { warning, setWarning } = props;
  useEffect(()=>{},[warning])
	return (
		<WarningContainer shown={warning}>
			<WarningPopUp>
				<Bar>
					<Title>Information</Title>
					<button className="cursor"
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
					Unable to launch full application. Device does not meet requirement.
					Resolution width must be larger than 760px.
					<button className="cursor"
						onClick={(e) => {
							e.stopPropagation();
							setWarning(false);
						}}>
						Ok
					</button>
				</WarningContent>
			</WarningPopUp>
		</WarningContainer>
	);
}
