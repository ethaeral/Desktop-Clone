// Libraries
import React, { useState } from "react";

// Components
import UtilityIcon from "../../../../../utilityIcon/UtilityIcon";
import {
	Title,
	Subscript,
	DividerIconHolder,
	ExpandMenu,
	SectionContainer,
	TitleCollaspe,
	ScrollBar,
} from "./styles/sectionDivStyles";

// Assets
import expand from "../../../../../../../../assets/isExpand.png";
import notExpanded from "../../../../../../../../assets/notExpand.png";

export default function SectionsDividers(props) {
	const { title, subscript, icons, openState, firstChild, lastChild } = props;
	const [isExpand, setIsExpand] = useState(openState ? true : false);
	const [visible, setVisible] = useState(false);
	
	return (
		<SectionContainer
			onMouseOver={() => {
				setVisible(true);
			}}
			onMouseLeave={() => {
				setVisible(false);
			}}
			firstChild={firstChild ? firstChild : undefined}
			lastChild={lastChild ? lastChild : undefined}
			isExpand={isExpand}>
			<button
				className={firstChild ? "sectionBarFirst" : "sectionBar"}
				tabIndex='-1'
				onClick={(e) => {
					setIsExpand(!isExpand);
				}}>
				<TitleCollaspe>
					<UtilityIcon
						image={notExpanded}
						active={expand}
						onClickFunc={() => {
							setIsExpand(!isExpand);
						}}
						hover={notExpanded}
						isActive={isExpand}
						reg={true}
					/>
					<Title>{title}</Title>
				</TitleCollaspe>
				{subscript ? <Subscript>{subscript}</Subscript> : ""}
				<DividerIconHolder isVisible={visible} isExpand={isExpand}>
					{icons
						? icons.map((icon, idx) => (
								<UtilityIcon
									key={`${icon.src}${icon.message}${idx}`}
									image={icon.src}
									hover={icon.src}
									message={icon.message}
									onClickFunc={icon.cb ? icon.cd : undefined}
								/>
						  ))
						: ""}
				</DividerIconHolder>
			</button>
			<ExpandMenu isActive={isExpand} maxHeight={props.height} >
				<props.component />
			</ExpandMenu>
			<ScrollBar/>
		</SectionContainer>
	);
}
