import styled from "styled-components";

export const ButtonContainer = styled.div`
	position: relative;
	display: inline-block;
	&:hover {
		div {
			display: ${(props) => (props.active ? "flex" : "none")};
		}
	}
`;

export const DropDown = styled.div`
	display: none;
	flex-direction: column;
	position: absolute;
	min-width: ${(props) => (props.long ? "400px" : "300px")};
	width: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

export const OptionButton = styled.p`
	display: flex;
	align-items: center;
	padding-left: 0.5em;
	padding-top: 0.5em;
	cursor: pointer;
`;
