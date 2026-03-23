import styled from "styled-components";

export const SkillContainer = styled.div`
	padding-bottom: 5em;
	height: 100%;
`;
export const SkillsTable = styled.div`
	height: 70vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	margin-top: 3em;
	@media (max-width: 1130px) {
			margin-top: ${(props) => (props.maximized ? "3em" : "1em")};
		}
`;



