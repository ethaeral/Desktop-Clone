import React, { useContext } from "react";

import CodeBox from "./components/codeBox/CodeBox";
import Terminal from "./components/terminal/Terminal";
import { CodeContainer, Empty } from "./styles/codeEditiorStyles";
import { CodeContext } from "../../../../../../modules/codeContext";
import EmptyVscodeIcon from "../../../../../../assets/emptyvscode.png";

export default function CodeEditior({ clear }) {
	const { currentProject } = useContext(CodeContext);
	return (
		<CodeContainer>
			{currentProject.current ? (
				<CodeBox />
			) : (
				<Empty>
					<img height='100%' src={EmptyVscodeIcon} alt='vscodeicon' />
				</Empty>
			)}
			<Terminal clear={clear} />
		</CodeContainer>
	);
}
