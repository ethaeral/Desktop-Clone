// Libraries
import React from "react";

// Styles

import {
	ProjectItemConatiner,
	ContribList,
	TitleHolder,
	MediaDescription,
	ProjectMain,
	DescriptionProject,
	TechStack,
	RoleName,
	Github,
} from "./styles/projectItemStyles";
import { H3, H4 } from "../../../../styles/siteContentStyles";

// Assets
import GithubIcon from "../../../../../../../../../../assets/webpage/github.svg";

// Components
import Icon from "../../../../../icons/Icon";

export default function ProjectItem(props) {
	const { data } = props;
	const {
		name,
		description,
		techStack,
		linkDeployed,
		linkGithub,
		contributions,
		role,
		date,
	} = data;
	return (
		<ProjectItemConatiner>
			<ProjectMain>
				<TitleHolder>
					<RoleName>
						<a href={linkDeployed}>
							<H3 bold>{name}</H3>
						</a>
						<H3>{role}</H3>
						<Github>
							<Icon
								src={GithubIcon}
								alt={"source code"}
								link={linkGithub}
								linkTitle={"Source Code"}
							/>
						</Github>
					</RoleName>
					<H3> {date}</H3>
				</TitleHolder>
				<MediaDescription>
					<br />
					{data.video ? (
						<iframe
							width='100%'
							src={data.media}
							frameBorder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title='project video'></iframe>
					) : data.media ===
					  "https://drive.google.com/file/d/1nfTHazTGidg04HaQ1zJS5L9FtLkb2nEh/preview" ? (
						<iframe
							src={data.media}
							width='100%'
							title='project presentation'></iframe>
					) : (
						<img src={data.media} alt={data.name} width='100%' />
					)}
				</MediaDescription>
				<TechStack>
					•
					{techStack.map((tech) => (
						<H4 key={tech}>{tech}•</H4>
					))}
				</TechStack>
			</ProjectMain>
			<ContribList>
				<DescriptionProject>
					<H4 bold>{description.short}</H4>
				</DescriptionProject>
				{contributions.map((bullet) => (
					<li key={bullet}>
						<H4>{bullet}</H4>
					</li>
				))}
			</ContribList>
		</ProjectItemConatiner>
	);
}
