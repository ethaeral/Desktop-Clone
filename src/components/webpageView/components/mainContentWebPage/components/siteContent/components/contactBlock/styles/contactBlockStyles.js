import styled from "styled-components";

export const BlockHolder = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => (props.fixed ? "block" : "none")};
	position: ${(props) => (!props.fixed ? "static" : "absolute")};
	left: -20%;
	@media (max-width: 1130px) {
		position: ${(props) => (!props.fixed ? "static" : "absolute")};
		left: -40%;
	}
	@media (max-width: 725px) {
		display: ${(props) => (!props.fixed ? "block" : "none")};
	}
	@media (max-height: 600px) {
		display: ${(props) => (!props.fixed ? "block" : "none")};
	}
`;

export const SideContent = styled.div`
	font-family: "Montserrat", sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: ${(props) => (props.fixed ? "fixed" : "initial")};
	width: ${(props) => (props.fixed ? "20%" : "50%")};
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
