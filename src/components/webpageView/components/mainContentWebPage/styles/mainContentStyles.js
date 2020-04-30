import styled from "styled-components";

export const StripedContainer = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	overflow-y: scroll;
	background: #fff;
`;
export const ContentContainer = styled.div`
	border: 1px red solid;
	display: flex;
	flex-direction: column;
	width: 70%;
	z-index: 100;
	position: relative;
	margin: 0 auto;
	font-family: "Montserrat", sans-serif;
	.skills {
		text-align: center;
		background-color: #fff;
	}
	header {
		border: 1px red solid;
		display: flex;
		align-items: center;
		height: 70vh;
	}
`;

export const H1 = styled.h1`
	font-size: 4em;
	font-weight: 700;
	line-height: 1.5em;
`;

export const H2 = styled.h2`
	font-size: 2.5em;
	font-weight: 700;
	line-height: 1.5em;
`;

export const H3 = styled.h3`
	line-height: 2em;
	font-size: 1em;
	font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export const H4 = styled.h4`
	line-height: 2em;
	font-size: 0.8em;
`;

export const H6 = styled.h6`
	line-height: 1.25em;
	font-size: 0.7em;
`;

export const MainContent = styled.div`
	margin: 0 auto;
	margin-top: 4em;
	width: 75%;
`;

export const NameTitle = styled.div`
	text-align: center;
	border: 1px red solid;
	width: 100%;
	padding: 5em;
	justify-content: center;
`;

export const SideContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	img {
		padding-left: 4em;
		border-radius: 50%;
		max-width: 80%;
		margin-right: 2em;
		z-index: 1;
	}
`;

export const IconHolder = styled.div`
	padding-top: 100%;
	margin-top: -95%;
	padding-left: 1em;
	padding-right: 1em;
	padding-bottom: 1em;
	border-radius: 20%;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 10%,
		rgba(255, 255, 255, 0) 100%
	);
`;

// Background components

export const UpperContainer = styled.div`
	width: 100%;
	height: 930px;
	position: absolute;
	top: -464px;
	background-color: #fff;
	left: -296px;
	max-width: 594px;
	overflow: hidden;
	@media (max-width: 580px) {
		left: -15px;
	}
`;
export const LowerContainer = styled.div`
	height: 100%;
	position: absolute;
	top: 365px;
	width: 594px;
	background-color: #fff;
`;

export const DarkBlueTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #003f5a;
	border-radius: 10%;
`;
export const WhiteTop = styled.div`
	height: 98%;
	width: 95%;
	border-style: solid;
	background-color: #fff;

	border-radius: 10%;
`;
export const TealTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #007a7a;

	border-radius: 10%;
`;
export const CreamTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #ebd9c8;

	border-radius: 10%;
`;
export const LightOrangeTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fea02f;

	border-radius: 10%;
`;
export const OrangeTop = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #de6600;
	border-radius: 10%;
`;
export const DarkBlueBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #003f5a;
	border-radius: 10%;
`;
export const WhiteBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fff;
	margin: 0em 0em 0em 3em;
	border-radius: 10%;
`;
export const TealBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #007a7a;
	border-radius: 10%;
`;
export const CreamBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #ebd9c8;

	border-radius: 10%;
`;
export const LightOrangeBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #fea02f;

	border-radius: 10%;
`;
export const OrangeBottom = styled.div`
	height: 100%;
	width: 100%;
	border-style: solid;
	background-color: #de6600;
	border-radius: 10%;
`;
