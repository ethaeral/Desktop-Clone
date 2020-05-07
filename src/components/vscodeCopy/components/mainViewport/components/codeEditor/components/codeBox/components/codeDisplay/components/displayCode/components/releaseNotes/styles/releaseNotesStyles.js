import styled from "styled-components";

export const ReleaseNotesConainter = styled.div`
	height: calc(100% - 40px);
	width: 100%;
	overflow-y: auto;
	color: #f6f6f4;
	font-family: "ubuntu";

	h2 {
		font-weight: 100;
	}
	ul {
		margin: 15px;
		list-style-type: circle;
	}
	&::-webkit-scrollbar {
    background: #282a36;

	}
	&::-webkit-scrollbar-thumb{
		background:  #f6f6f4;
	}
`;

export const ReleaseContentContainer = styled.div`
	margin: 5px;
`;
