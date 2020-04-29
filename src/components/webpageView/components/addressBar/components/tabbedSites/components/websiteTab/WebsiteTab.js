import React from "react";
import {
	SiteTabContainer,
	TopBorder,
	Border,
	LowerContent,
} from "./styles/websiteTabStyles";

export default function WebsiteTab(props) {
	const { state, setCounter, item, setActive, isActive } = props;
	return (
		<SiteTabContainer
			isActive={isActive}
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
				<button
					onClick={(e) => {
						e.stopPropagation();
						const removeLast = state.slice(1, state.length);
						setCounter(removeLast);
					}}>
					x
				</button>

				<Border
					className={`${item}1`}
					isActive={isActive}
					secLastChild={item === state[state.length - 2]}
				/>
			</LowerContent>
		</SiteTabContainer>
	);
}
