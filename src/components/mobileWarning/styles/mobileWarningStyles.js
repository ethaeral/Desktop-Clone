import styled from "styled-components";

export const WarningContainer = styled.div`
	display: none;
	position: relative;
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
	width: 50%;
	height: 200px;
`;

export const WarningContent = styled.div`
	background: #fff;
	padding: 5px;
	display: flex;
	height: 150px;
	flex-direction: column;
	justify-content: space-between;
	button {
		width: 50px;
		text-align: center;
		align-self: flex-end;
		border-radius: 5px;
		padding: 5px;
		border: 1px red solid;
		margin-right: 1em;
		margin-bottom: 1em;
	}
	.cursor {
		cursor: pointer;
	}
`;
