import styled from "styled-components";

export const WarningContainer = styled.div`
	display: none;
	position: absolute;
	height: 50%;
	width: 80%;
	top: 25%;
	left: 10%;
	margin: 0 auto;
	@media (max-width: 767px) {
		display: ${(props) => (props.shown ? "flex" : "none")};
		justify-content: center;
		align-items: center;
	}
`;

export const WarningPopUp = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 200px;
`;

export const WarningContent = styled.div`
	font-family: "ubuntu";
	color: #3d3c37;
	background: #f2f1f0;
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
		border: 1px #d79d86 solid;
		margin-right: 1em;
		margin-bottom: 1em;
	}
	.cursor {
		cursor: pointer;
	}
`;

export const WarningText = styled.div`
	margin-top: 1em;
	display: flex;
	padding: 5px;
	img {
		width: 200px;
		height: 60px;
		margin-right: 5px;
	}
`;
