import styled from "styled-components";

export const AIIconContainer = styled.div`

	background-color: ${(props) => (props.isActive ? `#282a36` : `#262626`)};
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

