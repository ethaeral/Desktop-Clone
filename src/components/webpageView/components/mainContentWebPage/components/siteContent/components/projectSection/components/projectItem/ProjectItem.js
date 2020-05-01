import React from "react";
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
import GithubIcon from "../../../../../../../../../../assets/webpage/github.svg";
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
							<a href={linkGithub}>
								<Icon
									src={GithubIcon}
									alt={"source code"}
									link={linkGithub}
									linkTitle={"Source Code"}
								/>
							</a>
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
							frameborder='0'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
							title='project video'></iframe>
					) : (
						<iframe
							src='https://drive.google.com/file/d/1nfTHazTGidg04HaQ1zJS5L9FtLkb2nEh/preview'
							width='100%'
							title='project presentation'></iframe>
					)}
				</MediaDescription>
				<TechStack>
					•
					{techStack.map((tech) => (
						<H4>{tech}•</H4>
					))}
				</TechStack>
			</ProjectMain>
			<ContribList>
				<DescriptionProject>
					<H4 bold>{description.short}</H4>
				</DescriptionProject>
				{contributions.map((bullet) => (
					<li>
						<H4>{bullet}</H4>
					</li>
				))}
			</ContribList>
		</ProjectItemConatiner>
	);
}
