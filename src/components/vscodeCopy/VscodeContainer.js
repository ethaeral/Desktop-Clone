import React from "react";
import styled from "styled-components";

import BottomUtilityBar from "./components/bottomUtilityBar/BottomUtilityBar";
import WindowsBar from "./components/windowBar/WindowBar";
import FileNavBar from "./components/fileNavBar/FileNavBar";
import MainViewport from "./components/mainViewport/MainViewport";

const Test = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 85vw;
	height: 85vh;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
	z-index: 1;
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
