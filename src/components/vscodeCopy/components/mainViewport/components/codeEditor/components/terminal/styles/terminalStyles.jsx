import styled from "styled-components";

export const TerminalContainer = styled.div`
	padding-left: 20px;
	display: flex;
	background: #282a36;
	flex-direction: column-reverse;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

	&:hover {
		&::-webkit-scrollbar {
			display: block;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;
export const Container = styled.div`
	height: 20%;
	max-height: 20%;
	border-top: 1px solid #8d587d;
	background: #282a36;
	display: flex;
	flex-direction: column;
	img {
		width: 350px;
		min-width: 350px;
		max-width: 350px;
	}
`;
