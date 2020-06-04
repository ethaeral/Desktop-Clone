import styled from "styled-components";

export const DisplayCodeContainer = styled.div`
	width: 100;
	height: 100%;
	overflow-y: auto;
	height: calc(100% - 40px);
	&::-webkit-scrollbar {
    background: #282a36;

	}
	&::-webkit-scrollbar-thumb{
		background:  #f6f6f4;
	}
`;
