import styled from "styled-components";

export const MobileOptions = styled.div`
	height: 1.5em;
	display: none;
	margin-right: 0.4em;

	.mobile {
		display: flex;
	}
	@media (max-width: 770px) {
		display: flex;
	}
`;
