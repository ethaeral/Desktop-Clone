import React from "react";

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
} from "./styles/mainContentStyles";

export default function MainContentWebPaged() {
	return (
		<StripedContainer id='scroll'>
			<MainContent>
				<header>
					Full Name -Picture - Contact info - Personal mission what I do and why
				</header>
				<main>
					<section id='skills'>Skills</section>
					<section id='projects'>Projects</section>
					<section id='about'>About</section>
					<section id='contact'>Contact</section>
				</main>
				<footer>Please look at my website desktop version</footer>
			</MainContent>
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
