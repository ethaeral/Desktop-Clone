import styled from "styled-components";

export const Bar = styled.div`
	background: linear-gradient(
		0deg,
		rgba(79, 77, 70, 1) 0%,
		rgba(58, 57, 53, 1) 80%
	);
	display: flex;
	justify-content: flex-end;
	border-radius: 0.25em 0.25em 0em 0em;
`;
export const Title = styled.div`
	color: #dfdbd2;
	margin: 0 auto;
	align-self: center;
	font-family: "roboto";
	font-weight: 700;
	font-size: 0.75em;
`;
export const WindowOptions = styled.div`
	height: 1.5em;
	display: flex;
`;
export const CircleButtons = styled.div`
	border: 1px #3d3c37 solid;
	display: flex;
	justify-content: cetner;
	align-items: center;
	border-radius: 100%;
	background: linear-gradient(
		0deg,
		rgba(98, 97, 92, 1) 0%,
		rgba(134, 133, 128, 1) 70%
	);
	padding: 0.1em;
	height: 0.75em;
	width: 0.75em;
	margin: 0.3em 0.2em 0.3em 0em;
`;

export const ExitButton = styled(CircleButtons)`
	background: linear-gradient(
		0deg,
		rgba(223, 79, 29, 1) 0%,
		rgba(242, 134, 101, 1) 100%
	);
`;
export const ButtonText = styled.p`
	margin: 0 auto;
	font-family: "roboto";
	color: #3d3c37;
`;
export const MaxWindow = styled.div`
	border: 1px #3d3c37 solid;
	width: 0.4em;
	height: 0.4em;
	margin: 0 auto;
	margin-left: 0.1em;
`;