import styled from "styled-components";

export const DropDownContainer = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	height: 100%;
	margin-left: 8px;
	border-left: 1px #262626 solid;
`;

export const PortfolioContainer = styled.div`
	&:hover {
		.FileButton {
			border-left: 1px #393939 solid;
		}
		.dropDown {
			border-left: 1px #393939 solid;
		}
	}
`;
