import styled from "styled-components";

export const CodeContainer = styled.div`
	display: flex;
`;

export const Counter = styled.div`
	font-family: "Lucida Console", Monaco, monospace;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	text-align: right;
	color: grey;
	font-size: 0.8em;
`;
export const Content = styled.div`
	margin-left: 20px;
	display: block;
	font-size: 0.8em;
	color: white;
	a {
		color: dodgerblue;
	}
	font-family: "Lucida Console", Monaco, monospace;
`;
export const CodeContent = styled.div`
padding-left: 15px;
border-left: 1px rgba(190,190,190, 0.1) solid;
`