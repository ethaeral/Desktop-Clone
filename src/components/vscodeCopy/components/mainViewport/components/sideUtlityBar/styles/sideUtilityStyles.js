import styled from "styled-components";
import { DropDown } from "../../../../fileNavBar/components/navButton/styles/navButtonStyle";

export const SideUtility = styled.div`
	background-color: #343746;
	width: 4.5em;
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
