import styled from "styled-components";

export const DropDownContainer = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	margin-left: 10px;
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
