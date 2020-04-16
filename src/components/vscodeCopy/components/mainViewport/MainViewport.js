import React from "react";

import SideUtilityBar from "./components/sideUtlityBar/SideUtilityBar";
import ExpandedUtilityBar from "./components/expandedUtilityBar/ExpandedUtilityBar";
import CodeEditior from "./components/codeEditor/CodeEditior";
import { MainViewContainer } from "./styles/mainViewStyles";

export default function MainViewport() {
	return (
		<MainViewContainer>
			<SideUtilityBar />
			<ExpandedUtilityBar />
			<CodeEditior />
		</MainViewContainer>
	);
}
