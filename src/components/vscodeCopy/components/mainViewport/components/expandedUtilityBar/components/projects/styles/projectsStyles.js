import styled from "styled-components";

export const ProjectsSideContainer = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
`;

export const TopBar = styled.div`
	font-family: "Ubuntu";
	font-size: 0.7em;
	color: #efe8d9;
	padding: 1em;
	h3 {
		margin-left: 0.5em;
	}
`;

export const SectionHolder = styled.div``;
