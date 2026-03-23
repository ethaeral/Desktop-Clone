// Libraries
import styled from "styled-components";

export const CodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: ${(props) => props.y};
	bottom: 0;
	left: ${(props) => props.x};
	right: 0;
	margin: auto;
	width: ${(props) => (props.maximized ? "100%" : "85vw")};
	height: ${(props) => (props.maximized ? "100%" : "85vh")};
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
	overflow: hidden;

	@media (max-width: 837px) {
		display: none;
	}
`;
