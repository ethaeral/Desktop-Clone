import React, { useState } from "react";
import { SelectionContainer } from "./styles/selectionStyles";

export default function Selection(props) {
	const {
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
		innerIconActive,
		innerIconHover,
		innerIconInactive,
		innerTitle,
		openIconInactive,
		openIconActive,
		openIconHover,
	} = props;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SelectionContainer>
			<button className="FolderButton" onClick={() => setIsOpen(!isOpen)}>
				{actionInactive && (
					<div
						inactive={actionInactive}
						hover={actionHover}
						active={actionActive}
					/>
				)}
				<div
					isOpen={isOpen}
					openIconInactive={openIconInactive}
					openIconActive={openIconActive}
					openIconHover={openIconHover}
					inactive={iconInactive}
					hover={iconHover}
					active={iconActive}
				/>
				<p>{title}</p>
				{subtitle}
				{subscript}
			</button>
			{innerTitle && (
				<button
				className="FileButton"
					innerIconActive={innerIconActive}
					innerIconHover={innerIconHover}
					innerIconInactive={innerIconInactive}
					isOpen={isOpen}
					onClick={() => onClickFunc}>
					<p>{innerTitle}</p>
				</button>
			)}
		</SelectionContainer>
	);
}
