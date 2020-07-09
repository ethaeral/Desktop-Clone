import styled from "styled-components";

export const Select = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 5px;
	color: #e5e2d9;
	font-family: "Ubuntu", sans-serif;
	img {
		margin: 5px 10px 5px 10px;
		max-height: 50px;
	}
	.bold {
		font-weight: 700;
	}
	.small {
		font-size: 0.6em;
	}
	.extitle {
		font-size: 0.9em;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

export const InformationHolder = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	justify-content: space-around;
	height: 100%;
	padding-right: 10px;
`;
export const Title = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 5px;
`;
export const ExtTitle = styled.p`
	white-space: nowrap;

	text-overflow: ellipsis;
`;
export const Version = styled.p`
	margin-left: 5px;
`;
export const Description = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-bottom: 5px;
`;
export const Author = styled.p``;
export const CTAAuthor = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	.install {
		margin: 0;
		border: 1px #191a21 solid;
		background-color: #48935b;
		font-size: 0.85em;
    color: #e5e2d9;
		padding: 0px 5px 0px 5px;
	}
`;
