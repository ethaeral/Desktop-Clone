// Libraries
import React, { useState, useEffect } from "react";

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
} from "./styles/appStyles";

import MinimizedTab from "./components/minimizedTab/MinimizedTab";
import WebPageView from "./components/webpageView/WebPageView";

function App() {
	const [statefulWindows, setWindowState] = useState({
		zCounter: 1,
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
			z: 0,
		},
		code: {
			minimized: false,
			maximized: false,
			closed: false,
			z: 0,
		},
		homepage: {
			minimized: false,
			maximized: true,
			closed: false,
			z: 1,
		},
	});
	const isWebPageMax = statefulWindows.homepage.maximized;
	useEffect(() => {
		console.log(statefulWindows.zCounter);
		console.log({
			homepage: statefulWindows.homepage.z,
			terminal: statefulWindows.terminal.z,
			code: statefulWindows.code.z,
		});
	}, [statefulWindows]);
	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
				<StripeContainer />

				<BackgroundImage none={isWebPageMax}>
					<img src={mask} alt='princess mononoke mask' />
				</BackgroundImage>
				<Background />
				<button
					onClick={() => {
						const addCounter = statefulWindows.zCounter++;
						setWindowState({
							...setWindowState,
							zCounter: addCounter,
						});
						setWindowState({
							...statefulWindows,
							terminal: {
								...statefulWindows.terminal,
								closed: false,
								z: statefulWindows.zCounter,
							},
						});
					}}>
					<TerminalIcon none={isWebPageMax}>
						<img src={terminal} alt='terminal-icon' />
						Terminal
					</TerminalIcon>
				</button>
				<Terminal none={isWebPageMax} />
				<VscodeContainer none={isWebPageMax} />
				<MinimizedTab />
				<WebPageView />
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
