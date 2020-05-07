import styled from "styled-components";

export const WarningContainer = styled.div`
	display: ${(props) => (props.full && props.shown ? "flex" : "none")};
	position: absolute;
	height: 50%;
	width: 80%;
	max-width: 300px;
	top: 25%;
	left: calc(50vw - 150px);
	margin: 0 auto;
	z-index: ${(props) => (props.full ? 6 : 0)};
	@media (max-width: 767px) {
		display: ${(props) => (props.shown ? "flex" : "none")};
		left: 10%;
		justify-content: center;
		align-items: center;
	}
`;

export const WarningPopUp = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 200px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const WarningContent = styled.div`
	font-family: "ubuntu";
	color: #3d3c37;
	background: #f2f1f0;
	padding: 5px;
	display: flex;
	height: calc(200px - 2em);
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
		margin-right: 1em;
	}
`;

export const WarningText = styled.div`
	margin-top: 1em;
	display: flex;
	padding: 5px;
	img {
		width: 150px;
		height: 60px;
		margin-right: 5px;
	}
`;
