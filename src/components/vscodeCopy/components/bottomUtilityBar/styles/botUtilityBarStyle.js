import styled from "styled-components";

export const UtilityBar = styled.div`
	color: #efe8d9;
	background-color: #191a21;
	height: 30px;
	display: flex;
	align-items: center;
	font-family: "Ubuntu";
	font-size: 0.75em;
	justify-content: space-between;
`;

export const IconHolder = styled.div`
	display: flex;
	overflow: hidden;
	align-items: center;
`;

export const Icon = styled.div`
	margin-left: 1em;
	display: flex;
	align-items: center;
	&:hover {
		span {
			visibility: visible;
		}
	}
`;

export const ToolTip = styled.span`
	visibility: hidden;
	position: absolute;
`;

export const ToolTipOverflow = styled(ToolTip)`
	right: 0;
`;

export const ToolTipContainer = styled.div`
	background: black;
	color: white;
	width: 100%;
	margin-left: ${(props) => (props.overflow ? 0 : "10%")};
	margin-bottom: 20%;
	padding: 0.25em;
	border: 1px solid white;
`;
