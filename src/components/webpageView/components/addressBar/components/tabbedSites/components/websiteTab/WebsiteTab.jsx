// Libraries
import React from "react";

// Stlyes
import {
	SiteTabContainer,
	TopBorder,
	Border,
	LowerContent,
	RemoveTab,
	TitleContainer,
	TitleText,
} from "./styles/websiteTabStyles";

// Assets
import ActiveX from "../../../../../../../../assets/webpage/activeX.png";
import DarkX from "../../../../../../../../assets/webpage/darkX.png";
import HoverX from "../../../../../../../../assets/webpage/hoverX.png";
import Soot from "../../../../../../../../assets/webpage/soot.gif";

export default function WebsiteTab(props) {
	const {
		state,
		item,
		setActive,
		isActive,
		setWindowState,
		statefulWindows,
	} = props;

	return (
		<SiteTabContainer
			img={DarkX}
			hoverImage={HoverX}
			lastChild={item === state[state.length - 1]}
			isActive={isActive}
			activeImage={ActiveX}
			onClick={(e) => {
				e.stopPropagation();
				setActive(item);
			}}>
			<TopBorder isActive={isActive} />
			<LowerContent>
				<Border
					firstChild={item === state[0]}
					className={`${item}1`}
					isActive={isActive}
				/>
				<TitleContainer isActive={isActive}>
					<TitleText>
						<img src={Soot} alt='soot spirit from spirited away' />
						Richany Nguon
					</TitleText>
					<RemoveTab
						className='removeTab'
						onClick={(e) => {
							e.stopPropagation();
							const removeLast = state.slice(1, state.length);
							setWindowState({ ...statefulWindows, firefoxTabs: removeLast });
							if (state.length === 1) {
								setWindowState({
									...statefulWindows,
									homepage: {
										...statefulWindows.hompage,
										minimized: false,
										maximized: false,
										closed: true,
									},
								});
							}
						}}
						img={DarkX}
					/>
				</TitleContainer>

				<Border
					className={`${item}1`}
					isActive={isActive}
					secLastChild={item === state[state.length - 2]}
				/>
			</LowerContent>
		</SiteTabContainer>
	);
}
