import styled from "styled-components";

export const Window = styled.div`
	position: absolute;

	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;

	width: ${(props) => (props.maximized ? "100%" : "50vw")};
	height: ${(props) => (props.maximized ? "100%" : "50vh")};
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
	display: flex;
	flex-direction: column;

	@media (max-width: 580px) {
		display: none;
	}
`;
