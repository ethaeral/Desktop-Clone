// Libraries
import styled from "styled-components";

export const SectionContainer = styled.div`
	.sectionBar {
		display: flex;
		align-items: center;
		border-color: #191a21;
		border-style: solid;
		border-width: ${(props) =>
			props.lastChild
				? "1px 0px 0px 0px"
				: props.isExpand
				? "1px 0px 0px 0px"
				: "1px 0px 1px 0px"};
		font-family: "Ubuntu";
		max-height: 20px;
		color: #efe8d9;
		width: 99.9%;
		background-color: #282a36;
		justify-content: space-between;
		margin: 0;
		&:focus {
			border: 1px #7b7f8b solid;
		}
	}
	.sectionBarFirst {
		display: flex;
		align-items: center;
		border-color: #191a21;
		border-style: solid;
		border-width: ${(props) => (props.isExpand ? "0px" : "0px 0px 1px 0px")};
		font-family: "Ubuntu";
		max-height: 20px;
		color: #efe8d9;
		width: 99.9%;
		background-color: #282a36;
		justify-content: space-between;
		margin: 0;
		&:focus {
			border: 1px #7b7f8b solid;
		}
	}
`;

export const Title = styled.div`
	font-size: 0.7em;
	font-weight: 700;
`;

export const Subscript = styled.div``;

export const DividerIconHolder = styled.div`
	display: ${(props) => (props.isVisible && props.isExpand ? "flex" : "none")};
`;

export const ExpandMenu = styled.div`
	overflow-y: overlay;
	overflow-x: hidden;
	max-height: ${(props) =>
		props.isActive
			? props.maxHeight
				? `${props.maxHeight}px`
				: "100%"
			: "0px"};
	width: 99%;
	&::-webkit-scrollbar {
		display: none;
	}

	&:hover {
		&::-webkit-scrollbar {
			display: block;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
	p {
		font-size: 0.8em;
		font-weight: 400;
		line-height: 1.5em;
	}
`;

export const TitleCollaspe = styled.div`
	display: flex;
	align-items: center;
`;

export const ScrollBar = styled.div`
	position: absolute;
	width: 10px;
	height: 20px;
`;
