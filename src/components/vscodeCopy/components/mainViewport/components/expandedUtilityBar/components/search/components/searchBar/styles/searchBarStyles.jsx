import styled from "styled-components";

export const SearchBarContainer = styled.div`
	margin: 5px 0px 5px 0px;
`;

export const Input = styled.input`
	background: inherit;
	outline: none;
	color: #efe8d9;
	border: none;
	padding-left: 5px;
`;

export const TagContainer = styled.div`
	width: ${(props) => (props.barWidth ? `${props.barWidth}px` : "0px")};
	display: flex;
	flex-wrap: wrap;
	margin: 5px auto;
`;

export const DropDownSuggestions = styled.div`
	cursor: pointer;
	width: ${(props) => (props.barWidth ? `${props.barWidth}px` : "0px")};
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	background-color: #282a36;
	border-width: 0px 1px 1px 1px;
	border-color: #191a21;
	border-style: solid;
	z-index: 1;
	position: absolute;
	max-height: 200px;
	overflow-y: scroll;
	left: ${(props) => `${props.left}px`};
	top: ${(props) => (props.height ? `${props.height}px` : "0px")};
	&::-webkit-scrollbar {
		background: #282a36;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(246, 246, 260, 0.1);
	}
`;
// F6  | F6 | F4
// 15x16 6x1 |  15x16 6x1 |  15x16 4x1
// 246 | 246 | 250
// (F6)₁₆ = (15 × 16¹) + (6 × 16⁰) = (246)₁₀
export const IconHolders = styled.div`
	display: flex;
	align-items: center;
`;

export const FakeInput = styled.div`
	display: flex;
	background: #282a36;
	width: 90%;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;
	border: 1px #191a21 solid;
`;

export const Tag = styled.div`
	margin-left: 5px;
	border-radius: 10px;
	border: 1px #191a21 solid;
	padding: 5px;
	display: flex;
	background-color: #282a36;
`;

export const RemoveTag = styled.div`
	margin-left: 10px;
	cursor: pointer;
	color: #97618a;
	font-weight: 700;
`;
