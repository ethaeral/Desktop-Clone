// Libraries
import React, { useContext } from "react";

import { TabBar } from "./styles/tabBarStyles";
import Tab from "./components/tab/Tab";
import {WindowsContext} from "../../modules/windowContext";

export default function MinimizedTab() {
	const { statefulWindows } = useContext(WindowsContext);
	const { tabbedWindows } = statefulWindows;
	return (
		<TabBar>
			{tabbedWindows.length > 0
				? tabbedWindows.map((window) => (
						<Tab
							key={window.tabbedTitle}
							title={window.tabbedTitle}
							type={window.type}
						/>
				  ))
				: ""}
		</TabBar>
	);
}
