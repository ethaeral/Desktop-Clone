import React, { useState, useRef, useEffect } from "react";
import UtilityIcon from "../../../../../utilityIcon/UtilityIcon";
import {
	DividerBar,
	Title,
	Subscript,
	DividerIconHolder,
	ExpandMenu,
	SectionContainer,
	TitleCollaspe,
} from "./styles/sectionDivStyles";

import expand from "../../../../../../../../assets/isExpand.png";
import notExpanded from "../../../../../../../../assets/notExpand.png";

export default function SectionsDividers(props) {
	const { title, subscript, icons, openState } = props;
	const [isExpand, setIsExpand] = useState(openState ? true : false);
	const [dimensions, setDimension] = useState({ height: null, width: null });
	const [visible, setVisible] = useState(false);
	const componentRef = useRef(null);
	const { height, width } = dimensions;
	useEffect(() => {
		const height = componentRef.current.offsetHeight;
		const width = componentRef.current.offsetWidth;
		setDimension({ height, width });
	}, []);
	return (
		<SectionContainer
			onMouseOver={(e) => {
				e.stopPropagation();
				setVisible(true);
			}}
			onMouseLeave={(e) => {
				e.stopPropagation();
				setVisible(false);
			}}>
			<DividerBar
				onClick={(e) => {
					e.stopPropagation();
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
						? icons.map((icon) => (
								<UtilityIcon
									image={icon.src}
									hover={icon.src}
									message={icon.message}
									onClickFunc={icon.cb ? icon.cd : undefined}
								/>
						  ))
						: ""}
				</DividerIconHolder>
			</DividerBar>
			<ExpandMenu isActive={isExpand} height={height} width={width}>
				<props.component ref={componentRef} />
			</ExpandMenu>
		</SectionContainer>
	);
}
