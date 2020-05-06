import styled from "styled-components";

export const TabBox = styled.div`
	display: flex;
	height: 1.5em;
	width: 15em;
	background: linear-gradient(
		0deg,
		rgba(79, 77, 70, 1) 0%,
		rgba(58, 57, 53, 1) 80%
	);
	color: #dfdbd2;
	justify-content: flex-end;
	align-items: center;
	border: 1px solid rgba(58, 57, 53, 1);
	padding-right: 0.5em;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	text-overflow: ellipsis;
	@media (max-width: 767px) {
		display: ${(props) => (props.hide ? "none" : "flex")};
	}
`;

export const TabButtonContainer = styled.div`
	display: flex;
	@media (max-width: 767px) {
		display: none;
	}
`;
