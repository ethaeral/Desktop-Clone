import React, { useEffect, useState, useCallback } from "react";
import {
	SearchBarContainer,
	TagContainer,
	Input,
	DropDownSuggestions,
} from "./styles/searchBarStyles";

function Tags({ tagName, tag, setTag }) {
	return (
		<span className='tag'>
			{tagName}
			<span
				onClick={() => {
					setTag(tag.filter((t) => t !== tagName));
				}}
				className='close'>
				x
			</span>
		</span>
	);
}

function Selection({
	selectionName,
	tag,
	setTag,
	stateControl,
	setSuggestions,
}) {
	const { state, set } = stateControl;
	return (
		<span
			onClick={() => {
				setTag([...tag, selectionName]);
				setSuggestions([]);
				set({ ...state, input: "" });
			}}>
			{selectionName}
		</span>
	);
}

export default function SearchBar({ stateControl, dependencyMap }) {
	const { state, set } = stateControl;
	const [tag, setTag] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const updateTag = useCallback(() => {
		const foundProjects = tag.map((t) => {
			return dependencyMap[t];
		});
		let results = [];
		foundProjects.forEach((project, idx) => {
			if (idx === 0) {
				results = [...project];
			} else {
				results = results.filter((i) => project.includes(i));
			}
		});
		set({ ...state, results });
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tag]);

	useEffect(() => {
		updateTag();
	}, [updateTag]);

	return (
		<SearchBarContainer>
			<div>
				<TagContainer>
					{tag.map((t) => (
						<Tags tagName={t} tag={tag} setTag={setTag} />
					))}
				</TagContainer>
				<Input
					type='text'
					value={state.input}
					onChange={(e) => {
						set({
							...state,
							input: e.target.value,
						});
						setSuggestions(
							Object.keys(dependencyMap).filter((key) => {
								return key
									.toLowerCase()
									.includes(
										e.target.value === "" || e.target.value === " "
											? "A"
											: e.target.value.toLowerCase()
									);
							})
						);
					}}
				/>
			</div>
			{suggestions.length > 0 && (
				<DropDownSuggestions>
					{suggestions.map((suggestion) => (
						<Selection
							selectionName={suggestion}
							tag={tag}
							setTag={setTag}
							stateControl={stateControl}
							setSuggestions={setSuggestions}
						/>
					))}
				</DropDownSuggestions>
			)}
		</SearchBarContainer>
	);
}
