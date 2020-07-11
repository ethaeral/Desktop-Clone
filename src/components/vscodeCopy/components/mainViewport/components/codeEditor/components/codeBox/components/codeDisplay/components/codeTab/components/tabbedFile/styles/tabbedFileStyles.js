import styled from "styled-components";

export const TabbedFileContainer = styled.div`
	background-color: ${(props) => (props.active ? "#282a36" : "#262626")};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => (props.active ? "#e5e2d9" : "#7b7f78")};
	font-family: "Ubuntu", sans-serif;
	font-size: 0.85em;
	padding: 10px;
	white-space: nowrap;
	border-right: 1px solid #191a21;
	border-bottom: 1px solid #191a21;
	cursor: pointer;
	border-top: ${(props) =>
		props.active ? "1px solid #8d587d" : "1px solid #262626"};
	.editor {
		background-image: ${(props) =>
			props.active ? `url(${props.inactive})` : "none"};
	}
	&:hover {
		.editor {
			background-image: ${(props) => `url(${props.inactive})`};
		}
	}
`;
