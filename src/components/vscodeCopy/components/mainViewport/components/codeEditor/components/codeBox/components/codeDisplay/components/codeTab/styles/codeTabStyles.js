import styled from "styled-components";

export const CodeTabBar = styled.div`
	height: 48px;
	width: 100%;
	background-color: #191a21;
	display: flex;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		height: 3px;
	}
	&::-webkit-scrollbar-track {


		background-color: #282a36;
	}
	&::-webkit-scrollbar-thumb {
		height: 4px;
		background-color: rgba(255,255,255,0.1);
	}
`;
