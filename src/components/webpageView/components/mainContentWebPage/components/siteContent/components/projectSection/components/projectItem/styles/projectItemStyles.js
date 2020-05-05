import styled from "styled-components";

export const ProjectItemConatiner = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 3em;
	@media (max-width: 725px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const ContribList = styled.ul`
	list-style-type: circle;
	width: 50%;
	@media (max-width: 725px) {
		width: 100%;
		margin-left: 1em;
		word-wrap: break-word;
	}
`;

export const TitleHolder = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const MediaDescription = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 725px) {
		iframe {
			width: 100%;
			margin: 0 auto;
		}
	}
`;

export const ProjectMain = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	margin-right: 3em;
	@media (max-width: 725px) {
		width: 100%;
		margin-right: 0em;
	}
`;

export const DescriptionProject = styled.div`
	margin-bottom: 1em;
`;
export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

export const RoleName = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;
export const Github = styled.div`

`;
