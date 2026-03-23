import styled from "styled-components";


export const TerminalButtonContainer = styled.div`
	position: relative;
	display: inline-block;
	@keyframes shade {
		0% {
			background-color: #3e3d39;
		}
		100% {
			background-color: #4a4946;
		}
	}
	&:hover {
		animation-name: ${(props) => (props.active ? "shade" : "none")};
		animation-duration: 0.5s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
		div {
			display: ${(props) => (props.active ? "flex" : "none")};
		}
	}
`;

export const ListDropDown = styled.div`
	display: none;
	flex-direction: column;
	position: absolute;
	/* min-width: 200px; */
	width: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

export const TerminalOptionButton = styled.p`
	display: flex;
	align-items: center;
	padding-left: 0.5em;
	padding-top: 0.5em;
	cursor: pointer;
`;
