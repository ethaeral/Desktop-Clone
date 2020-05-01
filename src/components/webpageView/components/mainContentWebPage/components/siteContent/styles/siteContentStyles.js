import styled from "styled-components";

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	z-index: 1;
	position: relative;
	margin: 0 auto;
	font-family: "Montserrat", sans-serif;
	header {

		display: flex;
		align-items: center;
		height: 80vh;
		justify-content: center;
		.innerBlock {
			width: 100%;
			border: 1px green solid;
		}
	}
	section {
		height: 80vh;
		@media (max-width: 725px) {
			background-color: rgba(255, 255, 255, 0.78);
		}
	}
	#about {
		display: flex;
		flex-direction: column;
		.codeSnippet {
			width: 100%;
		}
	}
	footer {
		background-color: rgba(255, 255, 255, 0.78);
	}
	@media (max-width: 1130px) {
		margin-right: 0;
	}
	@media (max-width: 725px) {
		width: 80%;
		margin: 0 auto;
	}
`;

export const HeaderContainer = styled.div`
	position: relative;
	display: flex;
	height: 80vh;
	align-items: center;
`;

export const AboutContent = styled.div`
	display: flex;
`;

export const MainContent = styled.div`
	margin: 0 auto;
	width: 75%;
	box-shadow: 10px 10px 2px 0px rgba(0, 0, 0, 0.02);
	@media (max-width: 725px) {
		width: 100%;
	}
`;

export const NameTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	justify-content: center;
	@media (max-width: 1130px) {
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.79);
		height: 50%;
	}
`;

export const H1 = styled.h1`
	font-size: 4em;
	font-weight: 700;
	line-height: 1.5em;
	@media (max-width: 1130px) {
		font-size: 3em;
		line-height: 1.25em;
	}
`;

export const H2 = styled.h2`
	font-size: 2.5em;
	font-weight: 700;
	line-height: 1.5em;
	@media (max-width: 725px) {
		font-size: 2.5em;
		line-height: 1.25em;
	}
`;

export const H3 = styled.h3`
	line-height: 2em;
	font-size: 1em;
	font-weight: ${(props) => (props.bold ? 700 : 400)};
	@media (max-width: 725px) {
		font-size: 0.9em;
		line-height: 1.25em;
	}
`;

export const H4 = styled.h4`
	line-height: 2em;
	font-size: 0.8em;
`;

export const H6 = styled.h6`
	line-height: 1.25em;
	font-size: 0.7em;
`;

export const P = styled.p``;
