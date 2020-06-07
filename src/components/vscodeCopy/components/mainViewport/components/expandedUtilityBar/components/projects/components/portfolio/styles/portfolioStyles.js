import styled from "styled-components";

export const DropDownContainer = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
`;
