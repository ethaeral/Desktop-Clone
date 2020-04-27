import React, { useState } from "react";

import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Terminal from "./components/terminal/Terminal";

import terminal from "./assets/02-terminal.png";
import mask from "./assets/mononoke.png";

import WindowsContext from "./modules/windowContext";

import {
	AppContainer,
	Background,
	TerminalIcon,
	BackgroundImage,
} from "./styles/appStyles";

import MinimizedTab from "./components/minimizedTab/MinimizedTab";
import WebPageView from "./components/webpageView/WebPageView";

function App() {
	const [webPageView, setWebPageView] = useState(true);
	const [statefulWindows, setWindowState] = useState({
		tabbedWindows: [],
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
			active: false,
		},
	});
	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
				<StripeContainer />
				{webPageView ? (
					<WebPageView  state={webPageView} set={setWebPageView}/>
				) : (
					<div>
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
						<MinimizedTab />
					</div>
				)}
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
