import React, { useContext } from "react";

import {
	SideUtility,
	SideIconHolder,
	SideIcon,
	SettingIcon,
	SettingIconHolder,
	SettingMenu,
} from "./styles/sideUtilityStyles";

// import bug from "../../../../../../assets/sideNav/bug.png";
// import bugActive from "../../../../../../assets/sideNav/bugActive.png";
// import bugHover from "../../../../../../assets/sideNav/bugHover.png";
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

import {WindowsContext} from "../../../../../../modules/windowContext";

import ListItem from "../../../fileNavBar/components/navButton/components/listItems/ListItem";
import { settingPopOutCode } from "../../../../../../data/fileNavBar";

export default function SideUtilityBar() {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const { sideNavActive } = statefulWindows;
	const allFalseActive = {
		search: false,
		branch: false,
		bug: false,
		ext: false,
		projects: false,
		setting: false,
	};
	const switchActive = (property) => {
		const newObj = {};
		const newActiveState = Object.assign(allFalseActive, newObj);
		newActiveState[property] = true;
		const addCounter = statefulWindows.zCounter++;
		setWindowState({
			...setWindowState,
			zCounter: addCounter,
		});
		setWindowState({
			...statefulWindows,
			sideNavActive: newActiveState,
			code: { ...statefulWindows.code, z: statefulWindows.zCounter },
		});
	};
	return (
		<SideUtility>
			<SideIconHolder>
				<SideIcon
					image={search}
					active={searchActive}
					hover={searchHover}
					isActive={sideNavActive.search}
					onClick={(e) => {
						e.stopPropagation();
						switchActive("search");
					}}
				/>
				<SideIcon
					image={gitbranch}
					active={gitbranchActive}
					hover={gitbranchHover}
					isActive={sideNavActive.branch}
					onClick={(e) => {
						e.stopPropagation();
						switchActive("branch");
					}}
				/>
				{/* <SideIcon
					image={bug}
					active={bugActive}
					hover={bugHover}
					isActive={sideNavActive.bug}
					onClick={(e) => {
						e.stopPropagation();
						switchActive("bug");
					}}
				/> */}
				<SideIcon
					image={extension}
					active={extensionActive}
					hover={extensionHover}
					isActive={sideNavActive.ext}
					onClick={(e) => {
						e.stopPropagation();
						switchActive("ext");
					}}
				/>
				<SideIcon
					image={projects}
					active={projectsActive}
					hover={projectsHover}
					isActive={sideNavActive.projects}
					onClick={(e) => {
						e.stopPropagation();
						switchActive("projects");
					}}
				/>
			</SideIconHolder>
			<SettingIconHolder active={sideNavActive.setting}>
				<SettingIcon
					image={setting}
					active={settingActive}
					hover={settingHover}
					isActive={sideNavActive.setting}
					onClick={(e) => {
						e.stopPropagation();
						setWindowState({
							...statefulWindows,
							sideNavActive: {
								...statefulWindows.sideNavActive,
								setting: !statefulWindows.sideNavActive.setting,
							},
						});
					}}
				/>
				<SettingMenu>
					{settingPopOutCode.map((obj) => (
						<ListItem
							state={statefulWindows}
							setState={setWindowState}
							cb={obj.callback}
							active={obj.active}
							key={obj.actionTitle}
							actionTitle={obj.actionTitle}
							shortCut={obj.shortCut}
						/>
					))}
				</SettingMenu>
			</SettingIconHolder>
		</SideUtility>
	);
}

// #1 Clean this up please it could be a bit drier otherwise good job chunky
