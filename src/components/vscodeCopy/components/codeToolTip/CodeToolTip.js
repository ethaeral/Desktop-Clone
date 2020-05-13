import React from "react";
import { ToolTipContainer, ToolTip } from "./styles/toolTipStyles";

export default function CodeToolTip(props) {
	const { x, y, message, visible } = props;
	return (
		<ToolTip
			x={x}
			y={y}
			visible={visible}
			onMouseOver={(e) => {
				e.stopPropagation();
			}}>
			<ToolTipContainer>{message}</ToolTipContainer>
		</ToolTip>
	);
}
