// Libraries
import styled from "styled-components";

export const IpBarContainer = styled.div`
	display: flex;
	padding-top: 3px;
	align-items: center;
	height: 33.33%;
	width: 100%;
	background-color: #323234;
	font-family: "Ubuntu";
	font-size: 0.95em;
	@media (max-width: 580px) {
		height: 50%;
	}
`;

export const RightNavButtons = styled.div`
	width: 17%;
	display: flex;
	align-items: center;
	margin-right: 3px;
`;

export const IpBarIcons = styled.div`
	background-position: center;
	width: 30px;
	height: 30px;
	background-image: ${(props) => `url(${props.src})`};
	background-repeat: no-repeat;
	border-radius: 5px;
`;

export const BackButton = styled(IpBarIcons)`
	width: 35px;
	height: 35px;
`;

export const IPAddressBar = styled.div`
	width: 62%;
	display: flex;
	align-items: center;
	background-color: #474749;
	border-radius: 5px;
	border: 1px solid #5a5a5c;
	height: 25px;
`;

export const RightIPBar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const LeftIPBar = styled.div`
	display: flex;
	align-items: center;
`;

export const LeftUtilityButtons = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Separator = styled.div`
	background-color: #5a5a5c;
	height: ${(props) => (props.ip ? "20px" : "30px")};
	width: 1px;
`;

export const LocalText = styled.div`
	color: #f9f9fa;
`;

export const PortText = styled.div`
	color: #929293;
`;
