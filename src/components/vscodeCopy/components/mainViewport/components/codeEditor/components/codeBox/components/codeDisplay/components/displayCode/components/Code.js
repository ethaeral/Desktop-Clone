import React, { useRef, useState, useEffect, useContext } from "react";
import { CodeContainer, Counter, Content } from "./codeStyles";
import { CodeContext } from "../../../../../../../../../../../../../modules/codeContext";

export default function Code({ data }) {
	const { currentProject } = useContext(CodeContext);
	const project = data[`${data.current}`];
	const contentRef = useRef(null);
	const [lineCount, setLineCount] = useState([]);
	useEffect(() => {
		const line = Math.floor(contentRef.current.offsetHeight / (18.5 * 0.8));
		if (contentRef.current) {
			const reference = [];
			for (let i = 1; i <= line; i++) {
				reference.push(i);
			}
			setLineCount(reference);
		}
		console.log(line, contentRef.current.offsetHeight);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contentRef, currentProject.current]);
	return (
		<CodeContainer>
			<Counter>
				{lineCount.map((num) => (
					<p>{num}</p>
				))}
			</Counter>
			<Content ref={contentRef}>
				/*
				{Object.keys(project).map((key) => (
					<div>
						{key}
						{typeof project === "object"
							? Object.keys(project[key]).map((innerKey) => (
									<div>
										{innerKey} {project[key][innerKey]}
									</div>
							  ))
							: project[key]}
					</div>
				))}
				*/
			</Content>
		</CodeContainer>
	);
}
/*

*/