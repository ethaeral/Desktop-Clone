import styled from "styled-components";

export const ToolTip = styled.span`
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
	position: absolute;
	top: ${(props) => (props.y === 0 ? 0 : `${props.y}px`)};
	left: ${(props) => (props.x === 0 ? 0 : `${props.x}px`)};
`;

export const ToolTipContainer = styled.div`
	background: black;
	display: inline-block;
	color: white;
	padding: 0.25em;
	border: 1px solid white;
	white-space: nowrap;
`;

export const FunctionContainer = styled.div`
	margin: 0px 5px 0px 5px;
`;
