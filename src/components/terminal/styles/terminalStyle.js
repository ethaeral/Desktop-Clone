import styled from "styled-components";

export const Window = styled.div`
	position: absolute;
	z-index: ${(props) => (props.active ? 2 : 1)};
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	margin-top: ${(props) => (props.maximized ? 0 : "6em")};
	width: ${(props) => (props.maximized ? "100%" : "50vw")};
	height: ${(props) => (props.maximized ? "95.5%" : "50vh")};
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
	display: ${(props) => (props.none ? "none" : "inherit")};

	@media (max-width: 580px) {
		display: none;
	}
`;
