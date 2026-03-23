import styled from "styled-components";

export const SearchSideContainer = styled.div`
	display: ${(props) => (props.active ? "block" : "none")};
	height: 89%;
	color: #e5e2d9;
	font-family: "Ubuntu", sans-serif;
	font-size: 0.85em;
`;
