import styled from "styled-components";

export const CodeContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: ${(props) => (props.maximized ? "100%" : "85vw")};
	height:${(props) => (props.maximized ? "100%" : "85vh")};
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	z-index: ${props=>props.active? 2: 1};
	visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
	overflow: hidden;
`;