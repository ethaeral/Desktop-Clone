import React, { useState } from "react";
import {
	SelectionContainer,
	SelectionIcon,
	FileButton,
	FolderButton,
} from "./styles/selectionStyles";

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
		state,
		setState,
		topFolder,
	} = props;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SelectionContainer>
			<FolderButton
				className='FolderButton'
				onClick={
					topFolder
						? () => {
								setState(!state);
								console.log("outside");
						  }
						: () => {
								console.log("inside");
								setIsOpen(!isOpen);
						  }
				}>
				{actionInactive && (
					<SelectionIcon
						inactive={actionInactive}
						hover={actionHover}
						active={actionActive}
					/>
				)}
				<SelectionIcon
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
			</FolderButton>
			{innerTitle && (
				<FileButton
					className='FileButton'
					innerIconActive={innerIconActive}
					innerIconHover={innerIconHover}
					innerIconInactive={innerIconInactive}
					isOpen={isOpen}
					onClick={(e) => {
						onClickFunc();
					}}>
					<p>{innerTitle}</p>
				</FileButton>
			)}
		</SelectionContainer>
	);
}
