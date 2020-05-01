import React from "react";
import { AboutContainer } from "./styles/aboutStyles";
import ContactBlock from "../contactBlock/ContactBlock";
import { H3 } from "../../styles/siteContentStyles";

export default function AboutSection(props) {
	return (
		<AboutContainer>
			<ContactBlock state={props.state} fixed={false} />
			<H3>
		 I'm an advocate for transparent relationships, vulnerability, self-development,	and continuous learning. I am looking to continuously expand, cultivate, and refine	current skills in software development in financial technology.
			</H3>
			<img className='codeSnippet' src={props.src} alt='codesnippet' />
		</AboutContainer>
	);
}
