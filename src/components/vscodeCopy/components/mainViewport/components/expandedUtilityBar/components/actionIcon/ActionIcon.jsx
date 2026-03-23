// Libraries
import React from "react";

// Styles
import {
	ActionContainer,
	ActionIconHolder,
	ToolTipDown,
	ToolTipDownContainer,
} from "./styles/actionIconStyles";

export default function ActionIcon(props) {
	const {
		type,
		toolTip,
		state,
		setState,
		activeImage,
		inactiveImage,
		cb,
	} = props;
	return (
		<ActionContainer>
			<ActionIconHolder
				isActive={state.active[type]}
				activeImage={activeImage}
				inActiveImage={inactiveImage}
				onClick={(e) => {
					e.stopPropagation();
					cb ? cb(state, setState) : console.log();
				}}
			/>
			<ToolTipDown>
				<ToolTipDownContainer>{toolTip}</ToolTipDownContainer>
			</ToolTipDown>
		</ActionContainer>
	);
}
