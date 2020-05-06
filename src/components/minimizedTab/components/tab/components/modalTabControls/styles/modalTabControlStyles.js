import styled from "styled-components";

export const ModalTabControlContainer = styled.div`
	display: none;
	.modalButton {
		display: flex;
	}
	@media (max-width: 767px) {
		display: block;
	}
`;
