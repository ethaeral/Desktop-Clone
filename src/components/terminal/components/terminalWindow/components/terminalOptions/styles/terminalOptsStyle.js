import styled from "styled-components";
import NavButton from "../../../../../../vscodeCopy/components/fileNavBar/components/navButton/NavButton";

export const TerminalContainer = styled.div`
	display: flex;
	height: 2em;
	background: #3e3d39;
	color: #e5e2d9;
	font-family: "Ubuntu", sans-serif;
	font-size: 0.85em;
`;

export const TerminalNavButtons = styled(NavButton)`
	min-width: 0;
`;
