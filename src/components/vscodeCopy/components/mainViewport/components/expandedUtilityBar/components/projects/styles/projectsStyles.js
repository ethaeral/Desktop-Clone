import styled from "styled-components";

export const ProjectsSideContainer = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
	height: 99.5%;
	border: 1px red solid;
`;

export const TopBar = styled.div`
	font-family: "Ubuntu";

	color: #efe8d9;
	padding: 1em;
	h3 {
		font-size: 0.7em;
		margin-left: 0.5em;
	}
`;

export const SectionHolder = styled.div`

`;
