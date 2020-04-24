import React, { useState } from "react";
import { SearchSideContainer } from "./styles/searchStyles";
import SearchToolBar from "./components/topToolBar/SearchToolBar";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/results/SearchResults";

export default function Search(props) {
	const [searchState, setSearchState] = useState({
		active: {
			refresh: false,
			clear: false,
			toggle: false,
		},
		projects: [],
		results: [],
		input: "",
	});
	const stateControl = { state: searchState, set: setSearchState };
	return (
		<SearchSideContainer active={props.active}>
			<SearchToolBar stateControl={stateControl} />
			<SearchBar stateControl={stateControl} />
			<SearchResults stateControl={stateControl} />
		</SearchSideContainer>
	);
}
