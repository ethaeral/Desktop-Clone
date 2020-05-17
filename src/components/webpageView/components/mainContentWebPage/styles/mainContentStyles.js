// Libraries
import styled from "styled-components";

export const StripedContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	overflow-y: scroll;
	background: #fff;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-track {
		background: #f2f1f0;
	}
	&::-webkit-scrollbar-thumb {
		background: ${(props) => (props.isActive ? "#f0895f" : "#bebdbd")};
		border-style: solid;
		border-width: 0px 0px 0px 5px;
		border-color: #f2f1f0;
		&:hover {
			border-width: 0px 0px 0px 3px;
		}
	}

	border-color: #0c0c0d;
	border-style: solid;
	border-width: 1px 0px 0px 0px;
`;

export const UpperContainer = styled.div`
	width: 100%;
	height: 930px;
	position: absolute;
	top: -464px;
	background-color: #fff;
	left: -296px;
	max-width: 594px;
	overflow: hidden;
	@media (max-width: 725px) {
		left: -15px;
	}
`;
export const LowerContainer = styled.div`
	height: ${(props) => (!props.maximized ? "3749px" : "calc(4749px - 1330px)")};
	position: absolute;
	top: 365px;
	width: 594px;
	background-color: #fff;
	@media (max-width: 1130px) {
		height: ${(props) =>
			!props.maximized ? "4749px" : "calc(4749px - 630px)"};
	}
	@media (max-width: 767px) {
		height: ${(props) => (!props.maximized ? "5100px" : "calc(4900px - 20vh)")};
	}
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
