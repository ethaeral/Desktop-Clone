import styled from "styled-components";

export const WarningContainer = styled.div`
	display: none;
	position: absolute;
	height: 100%;
	width: 100%;
	@media (max-width: 770px) {
		display: ${(props) => (props.shown ? "flex" : "none")};
		justify-content: center;
		align-items: center;
	}
`;

export const WarningPopUp = styled.div`
	margin: 0 auto;
`;

export const WarningContent = styled.div``;
