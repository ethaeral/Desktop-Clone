// Libraries
import React from "react";

// Styles
import {
	ContentContainer,
	NameTitle,
	H1,
	H3,
	MainContent,
	H2,
	H6,
	AboutContent,
	GradientSplitter,
} from "./styles/siteContentStyles";

// Assets
import Introduction from "../../../../../../assets/introduction.png";

// Components
import ContactBlock from "./components/contactBlock/ContactBlock";
import SkillSection from "./components/skillsSection/SkillSection";
import ProjectSection from "./components/projectSection/ProjectSection";

export default function SiteContent(props) {
	return (
		<ContentContainer>
			<ContactBlock state={props.state} fixed={true} />
			<header>
				<ContactBlock state={props.state} fixed={false} top={true} />
				<NameTitle>
					<H1>Richany Nguon</H1>
					<GradientSplitter />
					<H3 bold>
						&lt;FullStackDeveloper mission=&#123;continuous learning&#125;/&gt;
					</H3>
					<br />
					<H3>Looking for the right questions to ask. Passionate creator.</H3>
				</NameTitle>
			</header>
			<MainContent>
				<main>
					<section id='projects'>
						<H2>Projects</H2>
						<GradientSplitter />
						<ProjectSection/>
					</section>
					<section id='skills'>
						<H2>Skills</H2>
						<GradientSplitter />
						<SkillSection />
					</section>
					<section id='about'>
						<H2>About</H2>
						<GradientSplitter />
						<AboutContent>
							<ContactBlock state={props.state} fixed={false} />
							<img
								className='codeSnippet'
								src={Introduction}
								alt='codesnippet'
							/>
						</AboutContent>
					</section>
					<section id='contact'>
						<H2>Contact</H2>
						<GradientSplitter />
					</section>
				</main>
				<footer>
					<GradientSplitter />
					<H6>
						for maximum enjoyment please consume on a desktop and/or laptop -
						made with
						<span role='img' aria-label='tea emoji'>
							🍵
						</span>
					</H6>
				</footer>
			</MainContent>
		</ContentContainer>
	);
}
