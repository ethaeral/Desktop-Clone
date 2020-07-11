import React from "react";
import { DisplayCodeContainer } from "./styles/displayCodeStyles";

export default function DisplayCode(props) {
	return (
		<DisplayCodeContainer>
			<props.component data={props.data} />
		</DisplayCodeContainer>
	);
}
