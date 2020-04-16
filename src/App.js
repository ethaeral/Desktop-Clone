import React from "react";

import { statefulWindows } from "./modules/WindowState";

import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Terminal from "./components/terminal/Terminal";

import terminal from "./assets/02-terminal.png";
import mask from "./assets/mononoke.png";

import {
	AppContainer,
	Background,
	TerminalIcon,
	BackgroundImage,
} from "./styles/appStyles";

function App() {
	return (
		<AppContainer>
			<StripeContainer />
			<BackgroundImage>
				<img src={mask} alt='princess mononoke mask' />
			</BackgroundImage>
			<Background />
			<button
				onClick={() => {
					statefulWindows.setWindowState("terminal", "active", true);
				}}>
				<TerminalIcon>
					<img src={terminal} alt='terminal-icon' />
					Terminal
				</TerminalIcon>
			</button>
			<Terminal />
			<VscodeContainer />
		</AppContainer>
	);
}

export default App;
