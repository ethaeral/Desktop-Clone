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

function App() {
	const [statefulWindows, setWindowState] = useState({
		tabbedWindows: [],
		sideNavActive: {
			search: false,
			branch: false,
			bug: false,
			ext: false,
			projects: true,
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
	});
	return (
		<AppContainer>
			<WindowsContext.Provider value={{ statefulWindows, setWindowState }}>
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
				<MinimizedTab />
			</WindowsContext.Provider>
		</AppContainer>
	);
}

export default App;
