import React from "react";
import styled from "styled-components";

import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "./components/windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

const Test = styled.div`
	border: 1px red solid;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;

	margin: 5rem 5rem 5rem 6rem;
	width: 85vw;
	height: 85vh;
`;

export default function VscodeContainer() {
	return (
		<Test>
			<WindowsBar />
			<FileNavBar />
			<MainViewport />
			<BottomUtilityBar />
		</Test>
	);
}
