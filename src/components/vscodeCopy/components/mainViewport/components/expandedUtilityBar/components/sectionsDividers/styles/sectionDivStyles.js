// Libraries
import styled from "styled-components";

export const DividerBar = styled.div`
	display: flex;
	align-items: center;
	border: 1px #191a21 solid;
	font-family: "Ubuntu";
	font-size: 0.6em;
	color: #efe8d9;
	font-weight: 700;
`;

export const Title = styled.div``;

export const Subscript = styled.div``;

export const DividerIconHolder = styled.div``;

export const ExpandMenu = styled.div`
	height: ${(props) =>
		props.isActive ? (props.height ? `${props.height}px` : "50px") : "0px"};
	width: 99%;
`;

export const SectionContainer = styled.div`
	height: 100%;
`;
