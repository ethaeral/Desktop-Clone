import React, { useState } from "react";
import styled from "styled-components";

import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Terminal from "./components/terminal/Terminal";
import terminal from "./assets/02-terminal.png";

const Test = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
`;

const Background = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.03);
`;

const TerminalIcon = styled.div`
	position: absolute;
	top: 0;
	margin: 1em;
	display: flex;
	flex-direction: column;
	font-family: "ubuntu";
	font-size: 0.7em;
	justify-content: center;
	align-items: center;

	width: 5%;
	color: #dfdbd2;
	img {
		width: 100%;
	}
`;

function App() {
	const [minimized, setMinimized] = useState({
		terminal: false,
		code: false,
	});
	const [maximized, setMaximized] = useState({
		terminal: false,
		code: false,
	});
	const [closed, setClosed] = useState({
		terminal: true,
		code: false,
	});
	return (
		<Test>
			<StripeContainer />
			<Background />
			<a href='#'>
				<TerminalIcon>
					<img src={terminal} alt='terminal-icon' />
					Terminal
				</TerminalIcon>
			</a>
			<Terminal />
			<VscodeContainer />
		</Test>
	);
}

export default App;
