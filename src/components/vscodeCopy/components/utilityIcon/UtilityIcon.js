import React, { useState, useRef, useEffect } from "react";
import { UtilityIconContainer } from "./styles/utilityIconStyles";
import CodeToolTip from "../codeToolTip/CodeToolTip";
import { FunctionContainer } from "../codeToolTip/styles/toolTipStyles";
import ActiveInactiveIcon from "./components/activeInactiveIcon/ActiveInactiveIcon";

export default function UtilityIcon(props) {
	const {
		message,
		image,
		active,
		hover,
		isActive,
		onClickFunc,
		title,
		reg,
	} = props;

	const [mousePos, setMousePos] = useState({ x: null, y: null });
	const [visible, setVisible] = useState(false);

	const currRef = useRef(null);
	const tipRef = useRef(null);

	const { x, y } = mousePos;

	const onHover = (e) => {
		const { offsetLeft, offsetTop, offsetParent } = currRef.current;
		const tipWidth = tipRef.current.lastChild.offsetWidth;
		const { offsetHeight, offsetWidth } = offsetParent;
		const icon = e.target.getBoundingClientRect();
		const x =
			offsetLeft + e.pageX - icon.left < offsetWidth - tipWidth
				? offsetLeft + e.pageX - icon.left
				: offsetWidth - tipWidth;
		const y =
			offsetTop + e.pageY - icon.top - 25 < offsetHeight
				? offsetTop + e.pageY - icon.top - 25
				: offsetHeight;
		setMousePos({ x, y });
	};
	useEffect(() => {
		if (mousePos === { x: null, y: null }) {
			setMousePos({ x: 0, y: 0 })
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tipRef, currRef]);
	return (
		<FunctionContainer ref={tipRef}>
			<UtilityIconContainer
				ref={currRef}
				onMouseOver={(e) => {
					e.stopPropagation();
					onHover(e);
					setVisible(true);
				}}
				onMouseLeave={(e) => {
					e.stopPropagation();
					setVisible(false);
				}}>
				{image ? (
					<ActiveInactiveIcon
						onClickFunc={onClickFunc ? onClickFunc : console.log}
						image={image}
						active={active}
						hover={hover}
						isActive={isActive}
						reg={reg}
					/>
				) : (
					""
				)}
				{title ? title : ""}
			</UtilityIconContainer>
			{message && (
				<CodeToolTip message={message} x={x} y={y} visible={visible} />
			)}
		</FunctionContainer>
	);
}
