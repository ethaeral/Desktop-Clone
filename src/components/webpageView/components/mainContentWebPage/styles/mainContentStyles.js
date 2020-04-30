import styled from "styled-components";

export const StripedContainer = styled.div`
	height: 100vh;
	width: 100%;
	position: absolute;
	overflow-y: scroll;
	background: #fff;
`;
export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	z-index: 100;
	position: relative;
	margin: 0 auto;
	margin-top: 5em;
	font-family: "Montserrat", sans-serif;
	header {
		display: flex;
		align-items: center;
	}
`;

export const H1 = styled.h1`
	font-size: 4em;
	font-weight: 700;
`;

export const H3 = styled.h3`
	font-size: 1em;
	font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export const MainContent = styled.div`
	margin: 0 auto;
	width: 75%;
	border: 1px red solid;
`;

export const NameTitle = styled.div`
	margin-left: 3em;
	padding-bottom:5em;
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
