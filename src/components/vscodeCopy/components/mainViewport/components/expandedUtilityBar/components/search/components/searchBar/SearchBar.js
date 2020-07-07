import React, { useEffect, useState, useCallback, useRef } from "react";
import {
	SearchBarContainer,
	TagContainer,
	Input,
	DropDownSuggestions,
	IconHolders,
	FakeInput,
	Tag,
	RemoveTag,
} from "./styles/searchBarStyles";
import UtilityIcon from "../../../../../../../utilityIcon/UtilityIcon";
import Regex from "../../../../../../../../../../assets/utilityBar/searchPerseve.png";
import Regex2 from "../../../../../../../../../../assets/utilityBar/searchMatchWord.png";
import Regex3 from "../../../../../../../../../../assets/utilityBar/searchRegex.png";

function Tags({ tagName, tag, setTag }) {
	return (
		<Tag>
			{tagName}
			<RemoveTag
				onClick={() => {
					setTag(tag.filter((t) => t !== tagName));
				}}>
				x
			</RemoveTag>
		</Tag>
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

export default function SearchBar({ stateControl, dependencyMap , change}) {
	const BarRef = useRef(null);

	const { state, set } = stateControl;
	const [tag, setTag] = useState([]);
	const [suggestions, setSuggestions] = useState([]);

	const [bar, setBar] = useState({ width: 0, height: 0 });
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
		setBar({
			width: BarRef.current.offsetWidth,
			height: BarRef.current.offsetHeight + BarRef.current.offsetTop,
		});
	}, [updateTag, BarRef, change]);

	return (
		<SearchBarContainer>
			<div>
				<FakeInput ref={BarRef}>
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
					<IconHolders>
						<UtilityIcon image={Regex} hover={Regex} active={Regex} />
						<UtilityIcon image={Regex2} hover={Regex2} active={Regex2} />
						<UtilityIcon image={Regex3} hover={Regex3} active={Regex3} />
					</IconHolders>
				</FakeInput>
			</div>
			<TagContainer barWidth={bar.width}>
				{tag.map((t) => (
					<Tags tagName={t} tag={tag} setTag={setTag} />
				))}
			</TagContainer>

			{suggestions.length > 0 && (
				<DropDownSuggestions barWidth={bar.width-2} height={bar.height}>
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
