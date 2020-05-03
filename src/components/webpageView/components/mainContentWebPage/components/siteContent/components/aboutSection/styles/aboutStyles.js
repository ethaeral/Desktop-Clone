import styled from "styled-components";

export const AboutContainer = styled.div`
	justify-content: center;
	margin-top: 1em;
	display: flex;
	align-items: center;
	flex-direction: column;
	.codeSnippet {
		width: 40em;
		border-radius: 10px;
		@media (max-width: 725px) {
			width: 30em;
	}
	}
`;
