import React from "react";
import { AboutContainer } from "./styles/aboutStyles";
import ContactBlock from "../contactBlock/ContactBlock";
import { H3 } from "../../styles/siteContentStyles";

export default function AboutSection(props) {
	return (
		<AboutContainer>
			<ContactBlock state={props.state} fixed={false} />
			<H3>
				Thanks for coming by! I hope you enjoy tinkering around on my site. 
			</H3>
			<img className='codeSnippet' src={props.src} alt='codesnippet' />
		</AboutContainer>
	);
}
