import React, { useState, useEffect } from "react";
import { TabSiteContainer, NegativeSpace } from "./styles/tabbedSitesStyles";
import WebsiteTab from "./components/websiteTab/WebsiteTab";

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
				<button
					onClick={(e) => {
						e.stopPropagation();
						const nextNum = parseInt(counter[counter.length - 1]) + 1;
						setCounter([...counter, nextNum.toString()]);
					}}>
					click
				</button>
			</NegativeSpace>
		</TabSiteContainer>
	);
}
