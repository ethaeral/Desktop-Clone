import styled from "styled-components";

export const ExtSideContainer = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
	font-family: "Ubuntu";
	color: #efe8d9;
	margin: 10px;
`;
