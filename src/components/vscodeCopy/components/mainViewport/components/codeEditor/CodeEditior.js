import React from "react";
import styled from 'styled-components'

import CodeBox from "./components/codeBox/CodeBox";
import Terminal from "./components/terminal/Terminal";


const Test = styled.div`
	border: 1px red solid;
	display: flex;
	flex-direction: column;
`;

export default function CodeEditior() {
	return (
		<Test>
			CodeEditior
			<CodeBox />
			<Terminal />
		</Test>
	);
}
