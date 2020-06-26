import React, { useContext } from "react";

import { ExpandedUtility } from "./styles/expandedUtilityStyles";
import {WindowsContext} from "../../../../../../modules/windowContext";

import Branch from "./components/branch/Branch";
// import Bug from "./components/bug/Bug";
import Ext from "./components/ext/Ext";
import Projects from "./components/projects/Projects";
import Search from "./components/search/Search";

export default function ExpandedUtilityBar() {
	const { statefulWindows } = useContext(WindowsContext);
	const { search, bug, branch, ext, projects } = statefulWindows.sideNavActive;

	return (
		<ExpandedUtility>
			<Branch active={branch} />
			{/* <Bug active={bug} /> */}
			<Ext active={ext} />
			<Projects active={projects} />
			<Search active={search} />
		</ExpandedUtility>
	);
}
