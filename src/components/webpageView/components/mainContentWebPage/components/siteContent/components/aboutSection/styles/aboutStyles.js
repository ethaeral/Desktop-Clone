import styled from "styled-components";

export const AboutContainer = styled.div`
	justify-content: center;
	margin-top: 1em;
	display: flex;
	align-items: center;
	flex-direction: column;
	.codeSnippet {
		width: ${(props) => (props.maximized ? "40em" : "30em")};
		border-radius: 10px;
		@media (max-width: 1130px) {
			width: ${(props) => (props.maximized ? "30em" : "18em")};
		}
	}
`;
