import React from "react";
import { SearchResultContainer } from "./styles/searchResultStyle";

export default function SearchResults({
	results,
	currentProject,
	setCurrentProject,
}) {
	return (
		<SearchResultContainer>
			{results.length > 0
				? results.map((r) => (
						<p
							onClick={() => {
								setCurrentProject({ ...currentProject, current: r });
							}}>
							{r}
						</p>
				  ))
				: ""}
		</SearchResultContainer>
	);
}
