import styled from "styled-components";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	justify-content: space-between;
	button {
		width: 0.5em;
		background: inherit;
	
		all: unset;
		:hover {
			cursor: pointer;
		}
			margin: 0.3em 0.1em 0.3em 0em;
	}
`;

export const Background = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.03);
`;

export const TerminalIcon = styled.div`
	position: absolute;
	top: 0;
	margin: 1em;
	display: flex;
	flex-direction: column;
	font-family: "ubuntu";
	font-size: 0.7em;
	justify-content: center;
	align-items: center;
	width: 5%;
	color: #dfdbd2;
	img {
		width: 100%;
	}
`;

export const BackgroundImage = styled.div`
	img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0%;
		width: 25%;
		margin: 0 auto;
		margin-top: 5em;
	
	}
`;

