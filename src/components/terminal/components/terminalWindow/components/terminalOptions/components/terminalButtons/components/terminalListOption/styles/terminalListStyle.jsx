import styled from "styled-components";

export const TerminalItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	background-color: #4a4946;
	padding: 0.45em 2em 0.45em 2em;
	color: ${(props) => (props.active ? "#e5e2d9" : "#8d8b84")};
	cursor: pointer;
`;
