import styled from "styled-components";

export const ActionContainer = styled.div``;

export const ActionIconHolder = styled.div`
	border: 1px red solid;
	background-image: ${(props) =>
		props.isActive
			? `url(${props.activeImage})`
			: `url(${props.inactiveImage})`};
	height: 10px;
	width: 10px;
`;

export const ToolTipDown = styled.div``;

export const ToolTipDownContainer = styled.div``;
