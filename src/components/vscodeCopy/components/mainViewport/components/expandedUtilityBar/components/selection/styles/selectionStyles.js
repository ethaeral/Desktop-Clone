import styled from "styled-components";

export const SelectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	.FolderButton {
		width: 100%;
		display: flex;
		&:focus {
			.FileButton {
				color: red;
				border-left: ${(props) =>
					props.isOpen ? "1px #585858 solid" : "1px #262626 solid"};
			}
		}
	}
	.FileButton {
		border-left: 1px #262626 solid;
		padding-left: 10px;
		margin-left: 10px;
		width: 100%;
		display: ${(props) => (props.isOpen ? "flex" : "none")};
		/* &:focus {
			color: red;
			border-left: ${(props) =>
				props.isOpen ? "1px #585858 solid" : "1px #262626 solid"};
		} */
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
