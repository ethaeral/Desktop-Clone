import styled from "styled-components";

export const Bar = styled.div`
	background: linear-gradient(
		0deg,
		rgba(58, 57, 53, 1) 00%,
		rgba(79, 77, 70, 1) 50%
	);
	display: flex;
	justify-content: flex-end;
	border-radius: 0.35em 0.35em 0em 0em;
	height: 2em;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.02);
	cursor: grab;
`;
export const Title = styled.div`
	padding: 0em 2em 0em 2em;
	color: #e5e2d9;
	margin: 0 auto;
	align-self: center;
	font-family: "Ubuntu", sans-serif;
	font-weight: 700;
	font-size: 0.85em;
	letter-spacing: 0.1em;
	text-shadow: -1px 0 #383733, 0 1px #383733, 1px 0 #383733, 0 -1px #383733;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
export const WindowOptions = styled.div`
	height: 1.5em;
	display: flex;
	margin-right: 0.4em;
	@media (max-width: 767px) {
		display: none;
	}
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
