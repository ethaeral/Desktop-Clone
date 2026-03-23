// Libraries
import React, { useContext } from "react";

// Styles
import { TabBar } from "./styles/tabBarStyles";

// Components
import Tab from "./components/tab/Tab";

// Context
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
