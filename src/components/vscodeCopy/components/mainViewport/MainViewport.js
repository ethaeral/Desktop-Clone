// Libraries
import React from "react";

// Components
import SideUtilityBar from "./components/sideUtlityBar/SideUtilityBar";
import ExpandedUtilityBar from "./components/expandedUtilityBar/ExpandedUtilityBar";
import CodeEditior from "./components/codeEditor/CodeEditior";

// Styles
import { MainViewContainer } from "./styles/mainViewStyles";

export default function MainViewport({clear}) {
	return (
		<MainViewContainer>
			<SideUtilityBar />
			<ExpandedUtilityBar />
			<CodeEditior clear={clear} />
		</MainViewContainer>
	);
}
