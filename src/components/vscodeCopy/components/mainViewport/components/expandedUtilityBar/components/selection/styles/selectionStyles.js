import styled from "styled-components";

export const SelectionContainer = styled.div`
	display: flex;

	flex-direction: column;
	.FolderButton {
		margin: 0;
		width: 100%;
		display: flex;
		align-items: center;
		&:hover {
			.action {
				background-image: ${(props) =>
					props.isOpen
						? `url(${props.actionOpenHover})`
						: `url(${props.actionHover})`};
			}
			.folder {
				background-image: ${(props) =>
					props.isOpen
						? `url(${props.iconOpenHover})`
						: `url(${props.iconHover})`};
			}
		}
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
			/* background-color: rgba(255, 255, 255, 0.15);
			.file {
				background-image: ${(props) => `url(${props.innerActive})`};
			} */
		}
		&:hover {
			.file {
				background-image: ${(props) => `url(${props.innerHover})`};
			}
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
	margin-left: -10px;
	padding-left: 20px;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
	.FileButton{
		display: ${(props) => (props.isOpen ? "flex" : "none")};
	}
`;
export const FolderDiv = styled.div`
	margin-left: ${(props) => (props.topFolder ? "0px" : "-10px")};
	padding-left: ${(props) => (props.topFolder ? "0px" : "20px")};

	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;
