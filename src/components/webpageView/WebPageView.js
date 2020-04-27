// Libraries
import React, { useContext, useEffect } from "react";

// Components
import WindowBar from "../windowBar/WindowBar";

// Styles
import StripedBackground from "./components/stripedBackground/StripedBackground";
import { PageContainer, MainContent } from "./styles/webPageStyle";

// Context
import WindowsContext from "../../modules/windowContext";
import { WhiteBackground } from "./components/stripedBackground/styles/stripedStyles";

export default function WebPageView(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	useEffect(() => {
		if (statefulWindows.homepage.minimized || statefulWindows.homepage.closed) {
			props.set(false);
		}
	}, [
		props,
		statefulWindows.homepage.minimized,
		statefulWindows.homepage.closed,
	]);
	return (
		<PageContainer
			hidden={
				statefulWindows.homepage.minimized || statefulWindows.homepage.closed
			}
			maximized={statefulWindows.homepage.maximized}
			active={statefulWindows.homepage.active}
			onClick={() => {
				setWindowState({
					...statefulWindows,
					homepage: {
						...statefulWindows.homepage,
						active: true,
					},
					terminal: { ...statefulWindows.terminal, active: false },
					code: { ...statefulWindows.code, active: false },
				});
			}}>
			<WindowBar
				title={"Firefox Developer Edition"}
				type={"homepage"}
				tabbedTitle={"Firefox"}
				fixed={"true"}
			/><WhiteBackground>
			<StripedBackground />
			<MainContent>
				<nav>Styled like chrom bars - the book marks will be the nav</nav>
				<header>
					Full Name -Picture - Contact info - Personal mission what I do and why
				</header>
				<main>
					<section>Skills</section>
					<section>Projects</section>
				</main>
				<footer>Please look at my website desktop version</footer>
			</MainContent>
			</WhiteBackground>
		</PageContainer>
	);
}
