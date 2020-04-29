import styled from "styled-components";

export const TabSiteContainer = styled.div`
	height: 33.33%;
	display: flex;
	background-color: #0c0c0d;
	@media (max-width: 580px) {
		display: none;
	}
`;
export const NegativeSpace = styled.div`
	background-color: #0c0c0d;
	border-bottom: 1px solid #080809;
	display: flex;
	align-items: center;
`;

export const NewTabIcon = styled.div`
	width: 14px;
	height: 14px;
	background-image: ${(props) => `url(${props.img})`};
	margin: 0px 10px 0px 10px;
`;


