import styled from "styled-components";

export const BranchSideContainer = styled.div`
	display: ${(props) => (props.active ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.commitInput {
		margin: 5px;
		height: 30px;
	}
`;
