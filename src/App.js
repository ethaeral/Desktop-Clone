// Libraries
import React, { useState } from "react";

// Components
import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Terminal from "./components/terminal/Terminal";

// Assets
import terminal from "./assets/02-terminal.png";
import mask from "./assets/mononoke.png";

// Context
import WindowsContext from "./modules/windowContext";

// Data
import { allProjects } from "./data/projectsData";

import {
	AppContainer,
	Background,
	TerminalIcon,
	BackgroundImage,
	DisplayNone,
} from "./styles/appStyles";

import MinimizedTab from "./components/minimizedTab/MinimizedTab";
import WebPageView from "./components/webpageView/WebPageView";

function App() {
	const [statefulWindows, setWindowState] = useState({
		tabbedWindows: [],
		projects: allProjects.filter((project) => project.nonWeb === false),
		exts: allProjects.filter((project) => project.isExt === true),
		otherProjects: allProjects.filter(
			(project) => project.nonWeb === true && project.isExt === false
		),
		sideNavActive: {
			search: true,
			branch: false,
			bug: false,
			ext: false,
			projects: false,
			setting: false,
		},
		terminal: {
			minimized: false,
			maximized: false,
			closed: true,
			active: false,
		},
		code: {
			minimized: false,
			maximized: false,
			closed: false,
			active: false,
		},
		homepage: {
			minimized: false,
			maximized: true,
			closed: false,
			active: true,
		},
	});
	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
				<DisplayNone none={statefulWindows.homepage.maximized}>
					<StripeContainer />
					<BackgroundImage>
						<img src={mask} alt='princess mononoke mask' />
					</BackgroundImage>
					<Background />
					<button
						onClick={() => {
							setWindowState({
								...statefulWindows,
								terminal: {
									...statefulWindows.terminal,
									closed: false,
									active: true,
								},
								code: { ...statefulWindows.code, active: false },
							});
						}}>
						<TerminalIcon>
							<img src={terminal} alt='terminal-icon' />
							Terminal
						</TerminalIcon>
					</button>
					<Terminal />
					<VscodeContainer />
				</DisplayNone>
				<MinimizedTab />
				<WebPageView />
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
