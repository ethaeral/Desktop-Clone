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
