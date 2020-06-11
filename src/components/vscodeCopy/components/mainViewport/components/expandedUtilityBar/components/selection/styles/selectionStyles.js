import styled from "styled-components";

export const SelectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	.FolderButton {
		margin: 0;
		width: 100%;
		display: flex;
		align-items: center;
	}
	.FileButton {
		border-left: 1px #262626 solid;
		padding-left: 10px;
		margin: 0;
		margin-left: 10px;
		width: 100%;
		display: ${(props) => (props.isOpen ? "flex" : "none")};
		align-items: center;
		&:focus {
			border-left: 1px #585858 solid;
		}
	}
`;

export const SelectionIcon = styled.div`
	width: 18px;
	height: 18px;
	background-position: center;
	background-repeat: no-repeat;
	background-image: ${(props) =>
		props.isOpen ? `url(${props.openInactive})` : `url(${props.inactive})`};
`;

export const FileDiv = styled.div`
	&:hover {
		background-color: #34353e;
	}
`;
export const FolderDiv = styled.div`
	margin-left: -10px;
	padding-left: 20px;
	&:hover {
		background-color: #34353e;
	}
`;
