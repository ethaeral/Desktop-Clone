import styled from "styled-components";

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
	p {
		margin-left: 5px;
	}
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
