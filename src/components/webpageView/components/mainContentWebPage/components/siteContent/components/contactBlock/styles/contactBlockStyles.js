import styled from "styled-components";

export const BlockHolder = styled.div`

	width: ${(props) => (props.top || !props.fixed ? "40%" : "100%")};
	height: ${(props) => (props.top || !props.fixed ? "80%" : "100%")};
	display: ${(props) => (props.top ? "block" : "none")};
	position: ${(props) => (props.fixed ? "absolute" : "static")};
	left: ${(props) => (props.fixed ? "-20%" : "inherit")};
	@media (max-width: 1130px) {
		display: ${(props) => (props.fixed ? "block" : "none")};
		left: -40%;
	}
	@media (max-width: 725px) {
		display: ${(props) => (!props.fixed && !props.top ? "block" : "none")};
	}
	@media (max-height: 600px) {
		display: ${(props) => (props.maximized && props.fixed ? "block" : "none")};
		display: ${(props) =>
			!props.maximized && !props.top && !props.fixed ? "block" : "none"};
	}
`;

export const SideContent = styled.div`
	margin: 0 auto;
	font-family: "Montserrat", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${(props) => (props.top ? "100%" : "20%")};
	width: ${(props) => (props.fixed ? "20%" : "initial")};
	@media (max-width: 1130px) {
		position: ${(props) => (props.fixed ? "fixed" : "initial")};
	}
	img {
		border-radius: 50%;
		max-width: 80%;
		z-index: 1;
	}
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 20%,
		rgba(255, 255, 255, 0) 100%
	);
	padding: 5px;
	border-radius: 0% 0% 20% 20%;
`;

export const IconHolder = styled.div`
	padding: 5px;
`;
