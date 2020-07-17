import styled from "styled-components";
import { DropDown } from "../../../../fileNavBar/components/navButton/styles/navButtonStyle";

export const SideUtility = styled.div`
	background-color: #343746;
	width: 4.5em;
	min-width: 3em;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	border-right: 1px #191a21 solid;
`;

export const SideIconHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const SideIcon = styled.span`
	cursor: pointer;
	border-left: ${(props) => (props.isActive ? `2px solid #97618a` : `none`)};
	background-color: ${(props) => (props.isActive ? `#393c4d` : `#343746`)};
	width: 90%;
	height: 63px;
	background-position: center;
	background-image: ${(props) =>
		props.isActive ? `url(${props.active})` : `url(${props.image})`};
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	&:last-child {
		margin-bottom: 0.5em;
	}
	&:hover {
		background-image: ${(props) =>
			props.isActive ? `url(${props.active})` : `url(${props.hover})`};
	}
`;

export const SettingIcon = styled(SideIcon)`
	border-left: none;

	background-color: inherit;
	background-image: ${(props) =>
		props.isActive ? `url(${props.image})` : `url(${props.image})`};
	&:hover {
		background-image: ${(props) =>
			props.isActive ? `url(${props.image})` : `url(${props.hover})`};
	}
`;
export const SettingIconHolder = styled(SideIconHolder)`
	div {
		display: ${(props) => (props.active ? "flex" : "none")};
	}
	position: relative;
	display: inline-block;
`;

export const SettingMenu = styled(DropDown)`
	bottom: 0;
	margin-bottom: 100%;
	margin-left: 50%;
	color: #e5e2d9;
	font-family: "Ubuntu", sans-serif;
	font-size: 0.85em;
`;

export const Bubble = styled.div`
	border-radius: 100%;
	border: 1px #211e28 solid;
	width: 15px;
	height: 15px;
	background-color: #f286c4;
	color: #f5f6f4;
	text-align: center;
	font-size: 0.7em;
	font-weight: 700;
	position: absolute;
	top: 156px;
	left: 2em;
`;
