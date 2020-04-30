// Libraries
import React from "react";

// Styles
import { NavBarSiteContainer } from "./styles/navBarSiteStyles";

// Data
import { bookMarks } from "../../../../../../data/bookMarkData";

// Components
import BookMarkTab from "./components/bookmarkTab/BookMarkTab";

export default function NavBarSite() {
	return (
		<NavBarSiteContainer>
			<nav>
				{bookMarks.map((tab) => (
					<BookMarkTab key={tab.title} title={tab.title} id={tab.id} />
				))}
			</nav>
		</NavBarSiteContainer>
	);
}
