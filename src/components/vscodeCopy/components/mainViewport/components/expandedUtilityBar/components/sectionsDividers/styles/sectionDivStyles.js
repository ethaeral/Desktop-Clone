// Libraries
import styled from "styled-components";

export const DividerBar = styled.div`
	display: flex;
	align-items: center;
	border-color: #191a21;
	border-style: solid;
	border-width: 1px 0px 1px 0px;
	font-family: "Ubuntu";
	max-height: 20px;
	color: #efe8d9;

	background-color: #282a36;
	justify-content: space-between;
`;

export const Title = styled.div`
	font-size: 0.6em;
	font-weight: 700;
`;

export const Subscript = styled.div``;

export const DividerIconHolder = styled.div`
	display: ${(props) => (props.isVisible && props.isExpand ? "flex" : "none")};
`;

export const ExpandMenu = styled.div`
	height: ${(props) =>
		props.isActive ? (props.height ? `${props.height}px` : "50px") : "0px"};
	width: 99%;
`;

export const SectionContainer = styled.div``;

export const TitleCollaspe = styled.div`
	display: flex;
	align-items: center;
`;
