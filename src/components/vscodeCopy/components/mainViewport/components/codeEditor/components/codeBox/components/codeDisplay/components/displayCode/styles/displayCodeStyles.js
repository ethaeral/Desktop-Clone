import styled from "styled-components";

export const DisplayCodeContainer = styled.div`

	height: 100%;
	overflow-y: auto;
	height: calc(100% - 40px);
	&::-webkit-scrollbar {
		background-color: #282a36;
	}

	&:hover {
		&::-webkit-scrollbar-thumb {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;
