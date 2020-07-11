import React, { useContext } from "react";
import { Preview, PreviewContainer } from "./styles/previewStyles";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";
import { CodeTabBar } from "../codeDisplay/components/codeTab/styles/codeTabStyles";
import TabbedFile from "../codeDisplay/components/codeTab/components/tabbedFile/TabbedFile";

export default function VisualPreview() {
	const { currentProject } = useContext(CodeContext);
	console.log(currentProject[`${currentProject.current}`].media);
	return (
		<Preview>
			<CodeTabBar>
				<TabbedFile
					preview={"true"}
					project={currentProject[`${currentProject.current}`]}
					current={currentProject.current}></TabbedFile>
			</CodeTabBar>
			<PreviewContainer>
				{currentProject[`${currentProject.current}`].video ? (
					<iframe
						width='100%'
					
						src={currentProject[`${currentProject.current}`].media}
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='project video'></iframe>
				) : currentProject[`${currentProject.current}`].media ===
				  "https://drive.google.com/file/d/1nfTHazTGidg04HaQ1zJS5L9FtLkb2nEh/preview" ? (
					<iframe
						src={currentProject[`${currentProject.current}`].media}
						width='100%'
						title='project presentation'></iframe>
				) : (
					<img
						width='100%'
						src={currentProject[`${currentProject.current}`].media}
						alt={currentProject[`${currentProject.current}`].name}
					/>
				)}
			</PreviewContainer>
		</Preview>
	);
}
