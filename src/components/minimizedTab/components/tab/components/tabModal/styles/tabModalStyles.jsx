import styled from "styled-components";

export const TabModalContainer = styled.div`
	display: flex;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	z-index: 4;
	width: 100vw;
	height: 100vh;
	display: none;
	bottom: 0;
	left: 0;
	@media (max-width: 837px) {
		display: ${(props) => (props.isOpen ? "block" : "none")};
	}
`;

export const OpenModalContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: calc(50% - 4em - 110px);
	height: 155px;
	width: 200px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-items: flex-end;
	margin-bottom: 0em;
	transform: rotate(-45deg);
`;

export const TopButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: -1em;
`;
