// Libraries
import React, { useState } from "react";

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
	const { maximized } = props.state;
	const [height, setHeight] = useState(0);
	const { state, counter } = props;
	return (
		<StripedContainer id='scroll' isActive={state.z === counter}>
			<SiteContent state={state} maximized={maximized} setHeight={setHeight} />
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
			<LowerContainer maximized={maximized} height={height}>
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
