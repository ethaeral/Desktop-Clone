// Libraries
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
		&:hover {
			cursor: pointer;
		}
		margin: 0.3em 0.1em 0.3em 0em;
	}
	overflow: hidden;
`;

export const Background = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.03);
`;

export const TerminalIcon = styled.div`
	margin: 1em;
	display: flex;
	flex-direction: column;
	font-family: "ubuntu";
	font-size: 0.7em;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: #dfdbd2;
	display: flex;
	text-align: center;
	@media (max-width: 837px) {
		display: none;
	}
	img {
		width: 100%;
	}
`;

export const CodeIcon = styled(TerminalIcon)``;

export const FireFoxIcon = styled(TerminalIcon)`
	@media (max-width: 837px) {
		display: block;
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

		@media (max-width: 837px) {
			display: none;
		}
	}
`;

export const Credit = styled.div`
	a {
		position: absolute;
		right: 0;
		bottom: 0;
		text-decoration: none;
		font-family: "Ubuntu";
		font-size: 0.5em;
		color: #000;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const IconHolders = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	width: 5%;
`;
