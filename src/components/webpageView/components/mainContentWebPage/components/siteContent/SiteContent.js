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
	H4,
	H6,
	HeaderContainer,
} from "./styles/siteContentStyles";

// Assets
import Introduction from "../../../../../../assets/introduction.png";

// Components
import ContactBlock from "./components/contactBlock/ContactBlock";

export default function SiteContent(props) {
	return (
		<ContentContainer>
			<header>
				<HeaderContainer>
					<ContactBlock state={props.state} mobileOnly={false} />
					<NameTitle>
						<H1>Richany Nguon</H1>
						<H3 bold>
							&lt;FullStackDeveloper mission=&#123;continuous
							learning&#125;/&gt;
						</H3>
						<br />
						<H3>Looking for the right questions to ask. Passionate creator.</H3>
					</NameTitle>
				</HeaderContainer>
			</header>
			<MainContent>
				<main>
					<section id='skills'>
						<H2>Skills</H2>
						<H4>
							• Javascript • Redux • NodeJS • Express • Jest • Postgresql •
							Python • Django • Flask • Typescript • NestJs • Apollo GraphQL •
							TypeOrm •
						</H4>
					</section>
					<section id='projects'>
						<H2>Projects</H2>
					</section>
					<section id='contact'>
						<H2>Contact</H2>
					</section>
					<section id='about'>
						<H2>About</H2>
						<ContactBlock state={props.state} mobileOnly={true} />
						<img src={Introduction} alt='codesnippet' />
					</section>
				</main>
				<footer>
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
