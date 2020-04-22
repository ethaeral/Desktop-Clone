import styled from "styled-components";

export const SideUtility = styled.div`
	background-color: #343746;
	width: 3.25em;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 0.5em 0.5em 0em 0.5em;
`;

export const SideIconHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const SideIcon = styled.div`
	width: 100%;
	height: 29px;
	background-position: center;
	background-image: ${(props) => `url(${props.image})`};
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5em;
	&:last-child {
		margin-bottom: 0.5em;
	}
	&:hover{
		background-image: ${(props) => `url(${props.hover})`};
	}
`;
