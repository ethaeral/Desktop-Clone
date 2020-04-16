import React from "react";

import { TabBar } from "./styles/tabBarStyles";
import Tab from "./components/tab/Tab";

export default function MinimizedTab(props) {
	return (
		<TabBar>
			<Tab title={"Terminal"} type={"terminal"} />
		</TabBar>
	);
}
