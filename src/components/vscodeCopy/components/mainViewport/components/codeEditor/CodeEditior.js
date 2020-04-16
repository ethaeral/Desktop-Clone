import React from "react";


import CodeBox from "./components/codeBox/CodeBox";
import Terminal from "./components/terminal/Terminal";
import { CodeContainer } from "./styles/codeEditiorStyles";




export default function CodeEditior() {
	return (
		<CodeContainer>
			<CodeBox />
			<Terminal />
		</CodeContainer>
	);
}
