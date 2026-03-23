import styled from "styled-components";
import { MaxWindow } from "../../../styles/windowBarStyle";
export const ModalContianer = styled.div`
	display: ${(props) => (props.isOpen ? "flex" : "none")};
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	justify-content: flex-end;
	z-index: 3;
`;
export const ControlContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 190px;
	height: 190px;
	justify-content: flex-end;
	align-items: flex-start;
	button {
		border: none;
	}
`;

export const CircleControl = styled.div`
	font-size: 5em;
	color: #3d3c37;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.02);
	margin: ${(props) =>
		props.center ? "-29px 0px 0px 0px" : "0px 2px 1px 0px"};
	width: ${(props) => (!props.anchor ? "75px" : "100px")};
	height: ${(props) => (!props.anchor ? "75px" : "100px")};
	background: ${(props) =>
		props.exit
			? `linear-gradient(
		0deg,
		rgba(223, 79, 29, 1) 0%,
		rgba(242, 134, 101, 1) 100%
	)`
			: `linear-gradient(
		0deg,
		rgba(98, 97, 92, 1) 0%,
		rgba(134, 133, 128, 1) 70%
	)`};

	border-radius: ${(props) => (props.anchor ? "50% 0% 50% 50%" : "50%")};
	img {
		width: ${(props) => (props.tab ? "80px" : "70px")};
		margin: 0 auto;
		margin-left: 15px;
		transform: ${(props) => (props.tab ? "rotate(-93deg)" : "rotate(0deg)")};
	}
	transform: ${(props) => (props.tab ? "rotate(135deg)" : "rotate(0deg)")};
	span {
		transform: rotate(45deg);
	}
`;

export const ShadowClone = styled.div`
	position: absolute;
	width: ${(props) => (!props.anchor ? "75px" : "100px")};
	height: ${(props) => (!props.anchor ? "75px" : "100px")};
	border-radius: ${(props) => (props.anchor ? "50% 0% 50% 50%" : "50%")};
	background: rgb(255, 255, 255);
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0) 30%,
		rgba(0, 0, 0, 0.21612394957983194) 100%
	);
`;

export const ModalMaxWin = styled(MaxWindow)`
	border-width: 6px 4px 3px 3px;
	margin: 0 auto;
`;
