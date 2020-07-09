// Libraries
import styled from "styled-components";

export const ProjectsSideContainer = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
	height: 99.5%;
	font-family: "Ubuntu";

	color: #efe8d9;
	.message {
		margin: 10px;
		color: #8e8e8d;
		line-height: 1.4em;
	}
`;

export const TopBar = styled.div`
	padding: 1em;
	h3 {
		font-size: 0.7em;
		margin-left: 0.5em;
	}
`;

export const SectionHolder = styled.div``;
