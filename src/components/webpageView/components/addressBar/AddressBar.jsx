// Libraries
import React from "react";

// Styles
import { AddressBarContainer } from "./styles/addressBarStyles";

// Components
import TabbedSites from "./components/tabbedSites/TabbedSites";
import IpBar from "./components/ipBar/IpBar";
import NavBarSite from "./components/navBarSite/NavBarSite";

export default function AddressBar(props) {
	return (
		<AddressBarContainer maximized={props.maximized}>
			<TabbedSites />
			<IpBar />
			<NavBarSite />
		</AddressBarContainer>
	);
}
