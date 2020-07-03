import styled from "styled-components";

export const REPLMessage = styled.div``;
export const REPLInput = styled.input`
	width: 90%;
	background-color: inherit;
	border: none;
	&:focus {
		border: none;
		outline: none;
	}
`;
export const REPLContainer = styled.div`
	width: 100%;
`;
export const FullInput = styled.div`
	display: flex;
	width: 100%;
`;

export const PTerm = styled.p`
	font-size: 0.8em;
	color: ${(props) => props.color};
	font-weight: ${(props) => (props.color === "#f6f6f4" ? 400 : 700)};
	font-family: "Droid Sans Mono";
`;

export const Path = styled.div`
	display: flex;
`;
