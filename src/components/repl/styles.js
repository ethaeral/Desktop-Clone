import styled from "styled-components";

export const REPLMessage = styled.div``;
export const REPLInput = styled.input``;
export const REPLContainer = styled.div`
	flex-direction: column-reverse;
	justify-content: flex-end;
	overflow-y: scroll;
	width: 100%;
  p{
    color: #f6f6f4;
  }
`;
export const FullInput = styled.div``;

export const PTerm = styled.div`
	color: ${(props) => props.color};
`;
