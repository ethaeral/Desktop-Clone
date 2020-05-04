import React from "react";
import { AboutContainer } from "./styles/aboutStyles";
import ContactBlock from "../contactBlock/ContactBlock";
import { H3 } from "../../styles/siteContentStyles";

export default function AboutSection(props) {
	return (
		<AboutContainer>
			<ContactBlock state={props.state} fixed={false} />
			<br />
			<H3>
				Always following a dream and a mission. Exploring interests in art,
				cognitive sceince/philosophies, sound energy, social impact, and
				financial tech. Currently a developer looking to work with software
				dealing with alternative energies and wireless power.
			</H3>
			<br />
			<img
				className='codeSnippet'
				src={props.src}
				maximized={props.state.maximized.toString()}
				alt='codesnippet'
			/>
		</AboutContainer>
	);
}
