import styled from "styled-components";

export const AIIconContainer = styled.div`
	width: ${(props) =>
		props.reg ? "10px" : `${props.width ? props.width : 0}px`};
	height: ${(props) =>
		props.reg ? "10px" : `${props.height ? props.height : 0}px`};
	background-position: center;
	background-image: ${(props) =>
		props.isActive ? `url(${props.active})` : `url(${props.image})`};
	background-repeat: no-repeat;
	&:hover {
		background-image: ${(props) =>
			props.isActive ? `url(${props.active})` : `url(${props.hover})`};
	}
`;
