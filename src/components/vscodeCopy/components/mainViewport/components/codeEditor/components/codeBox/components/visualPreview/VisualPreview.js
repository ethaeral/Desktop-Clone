import React, { useContext } from "react";
import { Preview } from "./styles/previewStyles";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";

export default function VisualPreview() {
	const { currentProject } = useContext(CodeContext);
	return (
		<Preview>
			{currentProject.current ? (
				<p>{currentProject[`${currentProject.current}`].name}</p>
			) : (
				""
			)}
		</Preview>
	);
}
