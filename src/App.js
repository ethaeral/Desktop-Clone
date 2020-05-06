// Libraries
import React, { useState } from "react";

// Components
import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Terminal from "./components/terminal/Terminal";

// Assets
import terminal from "./assets/02-terminal.png";
import mask from "./assets/mononoke.png";
import code from "./assets/vscode.png";
import firefox from "./assets/firefox.png";

// Context
import WindowsContext from "./modules/windowContext";

// Data
import { allProjects } from "./data/projectsData";

import {
	AppContainer,
	Background,
	TerminalIcon,
	BackgroundImage,
	Credit,
	IconHolders,
	FireFoxIcon,
	CodeIcon,
} from "./styles/appStyles";

import MinimizedTab from "./components/minimizedTab/MinimizedTab";
import WebPageView from "./components/webpageView/WebPageView";
import MobileWarning from "./components/mobileWarning/MobileWarning";

function App() {
	const [warning, setWarning] = useState(true);
	const [statefulWindows, setWindowState] = useState({
		zCounter: 1,
		tabbedWindows: [],
		projects: allProjects.filter((project) => project.nonWeb === false),
		exts: allProjects.filter((project) => project.isExt === true),
		otherProjects: allProjects.filter(
			(project) => project.nonWeb === true && project.isExt === false
		),
		webPageProjects: allProjects.filter((project) => project.webPage === true),
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
			minimized: true,
			maximized: false,
			closed: false,
			z: 1,
		},
		modalIsOpen: {
			windowBar: false,
			tabbedBar: false,
		},
	});

	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
				<StripeContainer />
				<MobileWarning warning={warning} setWarning={setWarning}/>
				<BackgroundImage>
					<img src={mask} alt='princess mononoke mask' />
				</BackgroundImage>
				<Background />
				<IconHolders>
					<button
						onClick={(e) => {
							e.stopPropagation();
							const addCounter = statefulWindows.zCounter++;
							setWindowState({
								...statefulWindows,
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
						<TerminalIcon>
							<img src={terminal} alt='terminal-icon' />
							Terminal
						</TerminalIcon>
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							const addCounter = statefulWindows.zCounter++;
							setWindowState({
								...statefulWindows,
								zCounter: addCounter,
							});
							setWindowState({
								...statefulWindows,
								code: {
									...statefulWindows.code,
									closed: false,
									z: statefulWindows.zCounter,
								},
							});
						}}>
						<CodeIcon>
							<img src={code} alt='code-icon' />
							Ghibli Studio Code
						</CodeIcon>
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							const addCounter = statefulWindows.zCounter++;
							setWindowState({
								...statefulWindows,
								zCounter: addCounter,
							});
							setWindowState({
								...statefulWindows,
								homepage: {
									...statefulWindows.homepage,
									closed: false,
									z: statefulWindows.zCounter,
								},
							});
						}}>
						<FireFoxIcon>
							<img src={firefox} alt='firefox-icon' />
							Firefox
						</FireFoxIcon>
					</button>
				</IconHolders>
				<Terminal />
				<VscodeContainer />
				<MinimizedTab />
				<WebPageView />
				<Credit>
					<a href='https://icons8.com/'>Icon Credit - Icons8</a>
				</Credit>
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
