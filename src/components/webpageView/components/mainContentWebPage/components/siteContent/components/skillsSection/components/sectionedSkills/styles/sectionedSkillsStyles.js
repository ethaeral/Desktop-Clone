import styled from "styled-components";
export const SkillsSection = styled.div`
	width: 20%;
	text-align: center;
	display: flex;
	flex-direction: column;
	box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.02);
	border-radius: 5px;
	margin: 0.5em 1em 0.5em 1em;
	@media (max-width: 725px) {
		margin: ${(props) =>
			props.maximized ? " 0.5em 1em 0.5em 1em" : "0.2em 3em 0.2em 0em"};
		justify-content: space-around;
	}
	h3 {
		margin-bottom: 0.5em;
		@media (max-width: 725px) {
			font-size: 0.7em;
		}
	}
	h4 {
		line-height: ${(props) => (!props.maximized ? "1.4em" : "1.9em")};
		@media (max-width: 725px) {
			font-size: 0.7em;
			line-height: 1.4em;
		}
	}
`;

export const SkillList = styled.div`
	display: flex;
	flex-direction: column;
`;
