import React from "react";
import { AIIconContainer } from "./styles/activeInactiveIconStyles";

export default function ActiveInactiveIcon(props) {
	const { image, active, hover, isActive, onClickFunc } = props;
	return (
		<AIIconContainer
			onClick={(e) => {
				e.stopPropagation();
				onClickFunc();
			}}
			image={image}
			active={active}
			hover={hover}
			isActive={isActive}
		/>
	);
}

