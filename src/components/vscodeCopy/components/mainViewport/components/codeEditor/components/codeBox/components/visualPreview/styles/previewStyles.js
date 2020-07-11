import styled from "styled-components";

export const Preview = styled.div`
	border-left: 1px solid #8d587d;
	background-color: #282a36;
	max-width: 50%;
	min-width: 50%;
`;
export const PreviewContainer = styled.div`
	overflow-y: scroll;
	&::-webkit-scrollbar {
		background-color: #282a36;
	}

	&:hover {
		&::-webkit-scrollbar-thumb {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;
/*


*/