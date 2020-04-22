import styled from "styled-components";

export const SideUtility = styled.div`
	background-color: #343746;
	width: 3.25em;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

export const SideIconHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const SideIcon = styled.div`
	border-left: ${(props) => (props.isActive ? `2px solid #97618a` : `none`)};
	background-color: ${(props) => (props.isActive ? `#393c4d` : `#343746`)};
	width: 100%;
	height: 50px;
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
