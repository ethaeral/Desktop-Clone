// Libraries
import React, { useContext } from "react";

// Components
import WindowBar from "../windowBar/WindowBar";
import AddressBar from "./components/addressBar/AddressBar";

// Styles
import StripedBackground from "./components/stripedBackground/StripedBackground";
import { PageContainer, MainContent } from "./styles/webPageStyle";

// Context
import WindowsContext from "../../modules/windowContext";
import { WhiteBackground } from "./components/stripedBackground/styles/stripedStyles";

export default function WebPageView(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
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
				title={"Richany Nguon - Firefox Developer Edition"}
				type={"homepage"}
				tabbedTitle={"Firefox"}
			/>
			<WhiteBackground>
				<AddressBar />
				<StripedBackground />
				<MainContent>
					<nav>Styled like chrom bars - the book marks will be the nav</nav>
					<header>
						Full Name -Picture - Contact info - Personal mission what I do and
						why
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
