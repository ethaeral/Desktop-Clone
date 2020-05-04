// Libraries
import React from "react";

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
} from "./styles/mainContentStyles";

// Components
import SiteContent from "./components/siteContent/SiteContent";


export default function MainContentWebPaged(props) {
	return (
		<StripedContainer id='scroll' >
			<SiteContent state={props.state} />
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
			<LowerContainer maximized={props.state.maximized}>
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
