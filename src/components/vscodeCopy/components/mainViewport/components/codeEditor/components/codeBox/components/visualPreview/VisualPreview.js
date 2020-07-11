import React, { useContext } from "react";
import { Preview, PreviewContainer } from "./styles/previewStyles";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";
import { CodeTabBar } from "../codeDisplay/components/codeTab/styles/codeTabStyles";
import TabbedFile from "../codeDisplay/components/codeTab/components/tabbedFile/TabbedFile";

export default function VisualPreview() {
	const { currentProject } = useContext(CodeContext);
	return (
		<Preview>
			<CodeTabBar>
				<TabbedFile
					preview={"true"}
					project={currentProject[`${currentProject.current}`]}
					current={currentProject.current}></TabbedFile>
			</CodeTabBar>
			<PreviewContainer>{currentProject.current ? (
			<p>{currentProject[`${currentProject.current}`].name}</p>
			) : (
			""
			)}</PreviewContainer>
		</Preview>
	);
}
