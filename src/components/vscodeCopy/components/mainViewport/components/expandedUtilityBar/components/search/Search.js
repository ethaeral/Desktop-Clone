import React, { useState, useContext } from "react";
import { SearchSideContainer } from "./styles/searchStyles";
import SearchToolBar from "./components/topToolBar/SearchToolBar";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/results/SearchResults";
import { CodeContext } from "../../../../../../../../modules/codeContext";
export default function Search(props) {
	const { currentProject, setCurrentProject } = useContext(CodeContext);
	const [searchState, setSearchState] = useState({
		active: {
			refresh: false,
			clear: false,
			toggle: false,
		},

		results: [],
		input: "",
	});
	const [dependencyMap] = useState(() => {
		const map = {};
		Object.keys(currentProject).forEach((key) => {
			if (key !== "current") {
				currentProject[`${key}`].tags.forEach((tag) => {
					if (!map[`${tag}`]) {
						map[`${tag}`] = [];
						map[`${tag}`].push(key);
					} else {
						map[`${tag}`].push(key);
					}
				});
				currentProject[`${key}`].techStack.forEach((tech) => {
					if (!map[`${tech}`]) {
						map[`${tech}`] = [];
						map[`${tech}`].push(key);
					} else {
						map[`${tech}`].push(key);
					}
				});
			}
		});
		return map;
	});
	const stateControl = { state: searchState, set: setSearchState };
	return (
		<SearchSideContainer active={props.active}>
			<SearchToolBar stateControl={stateControl} />
			<SearchBar stateControl={stateControl} dependencyMap={dependencyMap} />
			<SearchResults
				results={searchState.results}
				currentProject={currentProject}
				setCurrentProject={setCurrentProject}
			/>
		</SearchSideContainer>
	);
}
