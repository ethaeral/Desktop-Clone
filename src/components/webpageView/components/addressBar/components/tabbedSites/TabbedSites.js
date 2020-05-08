// Libraries
import React, { useState, useEffect, useContext } from "react";

// Styles
import {
	TabSiteContainer,
	NegativeSpace,
	NewTabIcon,
} from "./styles/tabbedSitesStyles";

// Components
import WebsiteTab from "./components/websiteTab/WebsiteTab";

// Assets
import NewTab from "../../../../../../assets/webpage/newTab.png";

import WindowsContext from "../../../../../../modules/windowContext";

export default function TabbedSites() {
	const [active, setActive] = useState("");
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	const { firefoxTabs } = statefulWindows;
	useEffect(() => {
		let lastNum = firefoxTabs[firefoxTabs.length - 1];
		setActive(lastNum);
	}, [firefoxTabs]);
	return (
		<TabSiteContainer>
			{firefoxTabs.map((item) => (
				<WebsiteTab
					key={item}
					state={firefoxTabs}
					setWindowState={setWindowState}
					statefulWindows={statefulWindows}
					setActive={setActive}
					isActive={active === item}
					item={item}
				/>
			))}
			<NegativeSpace>
				<NewTabIcon
					onClick={async (e) => {
						e.stopPropagation();
						const nextNum =
							(await parseInt(firefoxTabs[firefoxTabs.length - 1])) + 1;
						await setWindowState({
							...statefulWindows,
							firefoxTabs: [...statefulWindows.firefoxTabs, nextNum.toString()],
						});
						const el = await document.getElementById(`scroll`);
						el.scrollTop = 0;
					}}
					img={NewTab}
				/>
			</NegativeSpace>
		</TabSiteContainer>
	);
}
