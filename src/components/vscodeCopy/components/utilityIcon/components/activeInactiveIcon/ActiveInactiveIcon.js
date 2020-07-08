// Libraries
import React, { useEffect, useState } from "react";

// Styles
import { AIIconContainer } from "./styles/activeInactiveIconStyles";

export default function ActiveInactiveIcon(props) {
	const { image, active, hover, isActive, onClickFunc, reg } = props;
	const [imageDim, setImageDim] = useState({ height: null, width: null });
	useEffect(() => {
		if (!reg) {
			const img = new Image();
			img.src = image;
			setImageDim({ height: img.height, width: img.width });
		}
	}, [image, reg]);
	const { height, width } = imageDim;
	return (
		<AIIconContainer
			onClick={(e) => {
				e.stopPropagation();
				onClickFunc();
			}}
	
			height={height}
			width={width}
			image={image}
			active={active}
			hover={hover}
			isActive={isActive}
			reg={reg}
		/>
	);
}
