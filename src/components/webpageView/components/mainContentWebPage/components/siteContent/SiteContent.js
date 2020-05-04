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
	GradientSplitter,
} from "./styles/siteContentStyles";

// Assets
import Introduction from "../../../../../../assets/introduction.png";

// Components
import ContactBlock from "./components/contactBlock/ContactBlock";
import SkillSection from "./components/skillsSection/SkillSection";
import ProjectSection from "./components/projectSection/ProjectSection";
import AboutSection from "./components/aboutSection/AboutSection";

export default function SiteContent(props) {
	return (
		<ContentContainer id='container'>
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
						<ProjectSection />
					</section>
					<section id='skills'>
						<H2>Skills</H2>
						<GradientSplitter />
						<SkillSection state={props.state} />
					</section>
					<section id='about'>
						<H2>About</H2>
						<GradientSplitter />
						<AboutSection state={props.state} src={Introduction} />
					</section>
				</main>
				<footer>
					<GradientSplitter />
					<H6>Designed and created by Richany Nguon 2020</H6>
				</footer>
			</MainContent>
		</ContentContainer>
	);
}
