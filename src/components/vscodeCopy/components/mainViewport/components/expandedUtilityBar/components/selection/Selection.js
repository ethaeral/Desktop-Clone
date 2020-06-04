import React from "react";

export default function Selection(props) {
	const {
		heightMultiplier,
		actionInactive,
		actionHover,
		actionActive,
		onClickFunc,
		iconInactive,
		iconHover,
		iconActive,
		title,
		subtitle,
		subscript,
		isActive,
	} = props;
	return (
		<div heightMultiplier={heightMultiplier} onClick={() => onClickFunc()}>
			{actionInactive && (
				<div
					inactive={actionInactive}
					hover={actionHover}
					active={actionActive}
					isActive={isActive}
				/>
			)}
			<div
				inactive={iconInactive}
				hover={iconHover}
				active={iconActive}
				isActive={isActive}
			/>
			{title}
			{subtitle}
			{subscript}
		</div>
	);
}
