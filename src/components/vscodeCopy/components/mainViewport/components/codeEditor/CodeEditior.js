import React from "react";


import CodeBox from "./components/codeBox/CodeBox";
import Terminal from "./components/terminal/Terminal";
import { CodeContainer } from "./styles/codeEditiorStyles";




export default function CodeEditior({clear}) {
	return (
		<CodeContainer>
			<CodeBox />
			<Terminal clear={clear}/>
		</CodeContainer>
	);
}
