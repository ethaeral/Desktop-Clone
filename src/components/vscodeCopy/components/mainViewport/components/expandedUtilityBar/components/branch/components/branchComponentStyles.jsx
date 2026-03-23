import styled from "styled-components";

export const BarToolContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px 0px 0px 0px;
	align-items: center;
	width: 95%;
`;
export const BranchIconHolder = styled.div`
	display: flex;
	align-items: center;
`;

export const CommitInput = styled.input`
	outline: none;
	color: #efe8d9;
	padding-left: 5px;
	height: 10px;
	background: #282a36;
	width: 90%;
	border: 1px #191a21 solid;
`;

export const ChangedSectContainer = styled.div`
	width: 95%;
	margin: 0 auto;
	height: 89%;
	color: #e5e2d9;
	font-family: "Ubuntu", sans-serif;
	font-size: 0.85em;
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
`;
export const Path = styled.p`
	display: flex;
	align-items: center;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-left: 5px;
	font-size: 0.8em;
	color: #b5b5b3;
`;

export const Change = styled.p`
	font-size: 0.8em;
	font-weight: 700;
`;
export const Grouped = styled.div`
	display: flex;
	align-items: center;
`;
export const Numbered = styled.div`
	margin-right: 5px;
	border-radius: 100%;
	border: 1px #211e28 solid;
	width: 15px;
	height: 15px;
	font-size: 0.7em;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #44475a;
`;

export const FileContainer = styled.div`
	margin-left: 5px;
	display: ${(props) => (props.isOpen ? "flex" : "none;")};
	flex-direction: column;
	border-left: 1px #262626 solid;
`;
