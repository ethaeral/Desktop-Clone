import React, { useRef, useState, useEffect, useContext } from "react";
import { CodeContainer, Counter, Content, CodeContent } from "./codeStyles";
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
				<p>/*</p>
				<CodeContent>
					<a
						href={project.linkDeployed}
						target='_blank'
						rel='noopener noreferrer'>
						<p>{project.name}</p>
					</a>
					<br />
					<p>{project.role}</p>
					<p>{project.date}</p>
					<a
						href={project.linkGithub}
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>
					<br />
					<br />
					<p>{project.description.long}</p>
					<br />
					<div>
						<p>Contributions</p>
						<CodeContent>
							{project.contributions.map((c) => (
								<p>*{c}</p>
							))}
						</CodeContent>
					</div>
					<br />
					<div>
						<p>Tech Stack</p>
						<CodeContent>
							{project.techStack.map((c) => (
								<p>*{c}</p>
							))}
						</CodeContent>
					</div>
					<br />
					<div>
						<p>Dependencies</p>
						<CodeContent>
							{project.tags.map((c) => (
								<p>*{c}</p>
							))}
						</CodeContent>
					</div>
					<br />
					<p>{project.type}</p>
				</CodeContent>
				<p>*/</p>
			</Content>
		</CodeContainer>
	);
}
/*

*/
