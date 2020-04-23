import React, { useContext } from "react";

import { ExpandedUtility } from "./styles/expandedUtilityStyles";
import WindowsContext from "../../../../../../modules/windowContext";

import Branch from './components/branch/Branch'
import Bug from './components/bug/Bug'
import Ext from './components/ext/Ext'
import Projects from './components/projects/Projects'
import Search from './components/search/Search'

export default function ExpandedUtilityBar() {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return <ExpandedUtility></ExpandedUtility>;
}
