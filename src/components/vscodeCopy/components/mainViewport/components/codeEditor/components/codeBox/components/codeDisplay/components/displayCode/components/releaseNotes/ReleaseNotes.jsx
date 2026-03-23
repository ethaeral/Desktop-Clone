import React from "react";
import {
	ReleaseNotesConainter,
	ReleaseContentContainer,
} from "./styles/releaseNotesStyles";
import {
	H2,
	H4,
} from "../../../../../../../../../../../../../webpageView/components/mainContentWebPage/components/siteContent/styles/siteContentStyles";

export default function ReleaseNotes() {
	return (
		<ReleaseNotesConainter>
			<ReleaseContentContainer>
				<H2>July 2020 (version beta 0.12)</H2>
				<hr />
				<H4>
					Update 0.01: Initial release canvas completed,{" "}
					<a
						href='https://trello.com/b/RjEB8dt6/desktop-portfolio'
						rel='noopener noreferrer'
						target='_blank'>
						Check out my Trello board
					</a>
					<br />
					If you would like to contact me about my work please email at
					alina.nguon@gmail.com or find me on{" "}
					<a href='https://www.linkedin.com/in/richany-nguon/'>LinkedIn</a>
				</H4>
				<hr />
				<H4>
					{" "}
					Welcome to the July 2020 release of Studio Ghibli Code. There are a
					number of updates in this version that we hope you will like, previous
					the key highlights include:
				</H4>
				<ul>
					<li>
						<H4>
							Mock Firefox application: Users will find a local site deployed on
							a mock deployment server
						</H4>
					</li>
					<li>
						<H4>
							Window Controls: Users are able to minimize, maximize, and exit a
							selected window
						</H4>
					</li>
					<li>
						<H4>
							Mock Tabs and Application Launcher Icons: Users are able to
							control which program they would like to have "launched" and which
							they would like to view.
						</H4>
					</li>
					<li>
						<H4>Draggable windows</H4>
					</li>
				</ul>
				<H4 bold>Recent release features:</H4>
				<ul>
					<li>
						<H4>
							Fully Functioning Studio Ghibli Code: Users are able to search for
							projects with key words and dependencies, see current projects
							that are in progress, able to view extensions, browse through
							project folder, view projects with preview media and embedded
							html, and have a fully functional terminal actions
						</H4>
					</li>

					<li>
						<H4>Tool tip generation at cursor position</H4>
					</li>
				</ul>
			</ReleaseContentContainer>
		</ReleaseNotesConainter>
	);
}
