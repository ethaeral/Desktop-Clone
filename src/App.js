// Libraries
import React, { useState } from "react";
// Assets
import terminal from "./assets/02-terminal.png";
import firefox from "./assets/firefox.png";
import mask from "./assets/mononoke.png";
import code from "./assets/vscode.png";
import Draggable from "./components/draggable/Draggable";
import MinimizedTab from "./components/minimizedTab/MinimizedTab";
import MobileWarning from "./components/mobileWarning/MobileWarning";
// Components
import StripeContainer from "./components/stripes/StripeContainer";
import Terminal from "./components/terminal/Terminal";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import WebPageView from "./components/webpageView/WebPageView";
// Data
import { allProjects } from "./data/projectsData";
// Context
import { WindowsContext } from "./modules/windowContext";
import {
	AppContainer,
	Background,
	BackgroundImage,
	CodeIcon,
	Credit,
	FireFoxIcon,
	IconHolders,
	TerminalIcon,
} from "./styles/appStyles";

function App() {
	const [warning, setWarning] = useState(true);
	const [welcome, setWelcome] = useState(false);
	const [statefulWindows, setWindowState] = useState({
		zCounter: 1,
		firefoxTabs: ["1"],
		tabbedWindows: [],
		inProgress: allProjects.filter((p) => p.inProgress === true),
		projects: allProjects.filter((project) => project.nonWeb === false),
		exts: allProjects.filter((project) => project.isExt === true),
		otherProjects: allProjects.filter(
			(project) => project.nonWeb === true && project.isExt === false
		),
		webPageProjects: allProjects.filter((project) => project.webPage === true),
		sideNavActive: {
			search: false,
			branch: false,
			bug: false,
			ext: false,
			projects: true ,
			setting: false,
		},
		terminal: {
			minimized: false,
			maximized: false,
			closed: true,
			clear: false,
			z: 0,
		},
		code: {
			minimized: false,
			maximized: false,
			closed: false,
			clear: false,
			z: 0,
		},
		homepage: {
			minimized: false,
			maximized: true,
			closed: false,
			z: 1,
		},
		modalIsOpen: {
			windowBar: false,
			tabbedBar: false,
		},
	});

	// useEffect(() => {
	// 	setTimeout(function () {
	// 		setWelcome(true);
	// 	}, 10003);
	// }, []);

	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
				<StripeContainer />
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
								terminal: {
									...statefulWindows.terminal,
									closed: false,
									z: addCounter,
									clear: false,
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
								code: {
									...statefulWindows.code,
									closed: false,
									z: addCounter,
									clear: false,
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
							let { firefoxTabs, zCounter } = statefulWindows;
							e.stopPropagation();
							const nextNum = parseInt(firefoxTabs[firefoxTabs.length - 1]) + 1;
							const addCounter = zCounter++;
							setWindowState({
								...statefulWindows,
								zCounter: addCounter,
								firefoxTabs: [...firefoxTabs, nextNum.toString()],
								homepage: {
									...statefulWindows.homepage,
									closed: false,
									z: addCounter,
								},
							});
						}}>
						<FireFoxIcon>
							<img src={firefox} alt='firefox-icon' />
							Firefox
						</FireFoxIcon>
					</button>
				</IconHolders>

				<Draggable
					component={Terminal}
					z={statefulWindows.terminal.z}
					state={statefulWindows}
					setState={setWindowState}
					type={"terminal"}
				/>
				<Draggable
					component={VscodeContainer}
					z={statefulWindows.code.z}
					state={statefulWindows}
					setState={setWindowState}
					type={"code"}
				/>

				<Draggable
					component={WebPageView}
					z={statefulWindows.homepage.z}
					state={statefulWindows}
					setState={setWindowState}
					type={"homepage"}
				/>
				<MinimizedTab />

				<MobileWarning
					state={warning}
					setState={setWarning}
					message={
						"Unable to load full application. Resolution width must be larger than 837px."
					}
				/>

				<MobileWarning
					state={welcome}
					setState={setWelcome}
					message={"The curious are always the most rewarded..."}
					full={true}
				/>
				<Credit>
					<a href='https://icons8.com/'>Icon Credit - Icons8</a>
				</Credit>
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
