import React from "react";
import {
	InformationHolder,
	Title,
	Description,
	CTAAuthor,
	Author,
	ExtTitle,
	Version,
	Select,
} from "./extSelectStyles";

export default function ExtSelect({
	name,
	version,
	description,
	icon,
	linkGithub,
	currentProject,
	setCurrentProject,
}) {
	return (
		<Select
			onClick={() => {
				setCurrentProject({
					...currentProject,
					current: name,
					tab: currentProject.tab.includes(`${name}`)
						? currentProject.tab
						: [...currentProject.tab, name],
				});
			}}>
			<img src={icon} alt={` icon`} />
			<InformationHolder>
				<Title>
					<ExtTitle className='bold extitle'>{name}</ExtTitle>
					<Version className='small'>{version}</Version>
				</Title>
				<Description>{description.short}</Description>
				<CTAAuthor>
					<Author className='bold'>Richany Nguon</Author>
					<button
						onClick={() => {
							window.open(`${linkGithub}`);
						}}
						className='install'>
						Install
					</button>
				</CTAAuthor>
			</InformationHolder>
		</Select>
	);
}
