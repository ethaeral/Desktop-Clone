import styled from "styled-components";

export const BlockHolder = styled.div`
	width: 20vw;
	height: 300px;
	display: ${(props) => (props.mobileOnly ? "none" : "initial")};
	@media (max-width: 1130px) {
		border: 1px red solid;
		display: ${(props) => (!props.mobileOnly ? "fixed" : "none")};
		margin-left: -100px;
	}
	@media (max-width: 725px) {
		display: ${(props) => (props.mobileOnly ? "initial" : "none")};
	}
`;

export const SideContent = styled.div`
	border: 1px red solid;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 1130px) {
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
