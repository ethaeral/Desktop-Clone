import React, { useContext } from "react";
import { ExpandedUtility } from "./styles/expandedUtilityStyles";
import WindowsContext from "../../../../../../modules/windowContext";
export default function ExpandedUtilityBar() {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return <ExpandedUtility>ExpandedUtilityBar</ExpandedUtility>;
}
