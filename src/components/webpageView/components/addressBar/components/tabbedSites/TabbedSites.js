// Libraries
import React, { useState, useEffect } from "react";

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

export default function TabbedSites() {
	const [counter, setCounter] = useState(["1"]);
	const [active, setActive] = useState("");

	useEffect(() => {
		let lastNum = counter[counter.length - 1];
		setActive(lastNum);
	}, [counter]);
	return (
		<TabSiteContainer>
			{counter.map((item) => (
				<WebsiteTab
					key={item}
					state={counter}
					setCounter={setCounter}
					setActive={setActive}
					isActive={active === item}
					item={item}
				/>
			))}
			<NegativeSpace>
				<NewTabIcon
					onClick={async (e) => {
						e.stopPropagation();
						const nextNum = (await parseInt(counter[counter.length - 1])) + 1;
						await setCounter([...counter, nextNum.toString()]);
						const el = await document.getElementById(`scroll`);
						el.scrollTop = 0;
					}}
					img={NewTab}
				/>
			</NegativeSpace>
		</TabSiteContainer>
	);
}
