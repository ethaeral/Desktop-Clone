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
	RevealAnimation,
} from "./styles/stripedStyles";

export default function StripedBackground() {
	return (
		<StripedContainer>
			<RevealAnimation>
			</RevealAnimation>
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
