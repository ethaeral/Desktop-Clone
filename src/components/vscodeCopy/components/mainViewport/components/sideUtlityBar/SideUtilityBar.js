import React from "react";
import {
	SideUtility,
	SideIconHolder,
	SideIcon,
} from "./styles/sideUtilityStyles";

import bug from "../../../../../../assets/sideNav/bug.png";
import bugActive from "../../../../../../assets/sideNav/bugActive.png";
import bugHover from "../../../../../../assets/sideNav/bugHover.png";
import extension from "../../../../../../assets/sideNav/extension.png";
import extensionActive from "../../../../../../assets/sideNav/extensionActive.png";
import extensionHover from "../../../../../../assets/sideNav/extensionHover.png";
import gitbranch from "../../../../../../assets/sideNav/gitbranch.png";
import gitbranchActive from "../../../../../../assets/sideNav/gitbranchActive.png";
import gitbranchHover from "../../../../../../assets/sideNav/gitbranchHover.png";
import projects from "../../../../../../assets/sideNav/projects.png";
import projectsActive from "../../../../../../assets/sideNav/projectsActive.png";
import projectsHover from "../../../../../../assets/sideNav/projectHover.png";
import search from "../../../../../../assets/sideNav/search.png";
import searchActive from "../../../../../../assets/sideNav/searchActive.png";
import searchHover from "../../../../../../assets/sideNav/searchHover.png";
import setting from "../../../../../../assets/sideNav/setting.png";
import settingActive from "../../../../../../assets/sideNav/settingActive.png";
import settingHover from "../../../../../../assets/sideNav/settingHover.png";

export default function SideUtilityBar() {
	return (
		<SideUtility>
			<SideIconHolder>
				<SideIcon image={search} active={searchActive} hover={searchHover} />
				<SideIcon image={gitbranch} active={gitbranchActive} hover={gitbranchHover} />
				<SideIcon image={bug} active={bugActive} hover={bugHover} />
				<SideIcon image={extension} active={extensionActive} hover={extensionHover} />
				<SideIcon image={projects} active={projectsActive} hover={projectsHover} />
			</SideIconHolder>
			<SideIconHolder>
				<SideIcon image={setting} active={settingActive} hover={settingHover} />
			</SideIconHolder>
		</SideUtility>
	);
}
