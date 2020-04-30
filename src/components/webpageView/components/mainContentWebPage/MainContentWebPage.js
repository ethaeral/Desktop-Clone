// Libraries
import React from "react";

// Assets
import ProfileImage from "../../../../assets/profile.jpg";
import Email from "../../../../assets/webpage/email.svg";
import Github from "../../../../assets/webpage/github.svg";
import Linkedin from "../../../../assets/webpage/linkedin.svg";
import Location from "../../../../assets/webpage/location.svg";

// Styles
import {
	CreamBottom,
	CreamTop,
	DarkBlueBottom,
	DarkBlueTop,
	LightOrangeBottom,
	LightOrangeTop,
	LowerContainer,
	OrangeBottom,
	OrangeTop,
	StripedContainer,
	TealBottom,
	TealTop,
	UpperContainer,
	WhiteBottom,
	WhiteTop,
	MainContent,
	H1,
	H3,
	NameTitle,
	HeaderContainer,
	ContentContainer,
	SideContent,
	IconHolder,
} from "./styles/mainContentStyles";

// Components
import Icon from "./components/icons/Icon";

export default function MainContentWebPaged() {
	return (
		<StripedContainer id='scroll'>
			<ContentContainer>
				<header>
					<SideContent>
						<img src={ProfileImage} alt='richany nguon' />
						<IconHolder>
							<Icon
								src={Email}
								alt={"email icon"}
								link={false}
								linkTitle={"alina.nguon@gmail.com"}
							/>
							<Icon
								src={Location}
								alt={"location icon"}
								link={false}
								linkTitle={"Greater Boston, MA"}
							/>
							<Icon
								src={Linkedin}
								alt={"linkedin icon"}
								link={"https://www.linkedin.com/in/richany-nguon/"}
								linkTitle={"richany-nguon"}
							/>
							<Icon
								src={Github}
								alt={"github icon"}
								link={"https://github.com/richanynguon"}
								linkTitle={"richanynguon"}
							/>
						</IconHolder>
					</SideContent>
					<NameTitle>
						<H1>Richany Nguon</H1>
						<H3 bold>&lt;FullStackDeveloper/&gt;</H3>
						<br/>
						<H3></H3>
					</NameTitle>
				</header>
				<MainContent>
					<main>
						<section id='skills'>Skills</section>
						<section id='projects'>Projects</section>
						<section id='about'>About</section>
						<section id='contact'>Contact</section>
					</main>
					<footer>Please look at my website desktop version</footer>
				</MainContent>
			</ContentContainer>
			<UpperContainer>
				<DarkBlueTop>
					<WhiteTop>
						<TealTop>
							<WhiteTop>
								<CreamTop>
									<WhiteTop>
										<LightOrangeTop>
											<WhiteTop>
												<OrangeTop>
													<WhiteTop></WhiteTop>
												</OrangeTop>
											</WhiteTop>
										</LightOrangeTop>
									</WhiteTop>
								</CreamTop>
							</WhiteTop>
						</TealTop>
					</WhiteTop>
				</DarkBlueTop>
			</UpperContainer>
			<LowerContainer>
				<OrangeBottom>
					<WhiteBottom>
						<LightOrangeBottom>
							<WhiteBottom>
								<CreamBottom>
									<WhiteBottom>
										<TealBottom>
											<WhiteBottom>
												<DarkBlueBottom>
													<WhiteBottom></WhiteBottom>
												</DarkBlueBottom>
											</WhiteBottom>
										</TealBottom>
									</WhiteBottom>
								</CreamBottom>
							</WhiteBottom>
						</LightOrangeBottom>
					</WhiteBottom>
				</OrangeBottom>
			</LowerContainer>
		</StripedContainer>
	);
}
