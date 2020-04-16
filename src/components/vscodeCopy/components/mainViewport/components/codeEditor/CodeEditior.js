import React from "react";
import styled from 'styled-components'

import CodeBox from "./components/codeBox/CodeBox";
import Terminal from "./components/terminal/Terminal";


const Test = styled.div`

	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

export default function CodeEditior() {
	return (
		<Test>
			<CodeBox />
			<Terminal />
		</Test>
	);
}
