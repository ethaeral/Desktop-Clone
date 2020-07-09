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

export default function ExtSelect({ name, version, description, icon,linkGithub }) {
	return (
		<a href={linkGithub} target="_blank" rel="noopener noreferrer">
			<Select>
				<img src={icon} alt={` icon`} />
				<InformationHolder>
					<Title>
						<ExtTitle className='bold extitle'>{name}</ExtTitle>
						<Version className='small'>{version}</Version>
					</Title>
					<Description>{description.short}</Description>
					<CTAAuthor>
						<Author className='bold'>Richany Nguon</Author>
						<button className='install'>Install</button>
					</CTAAuthor>
				</InformationHolder>
			</Select>
		</a>
	);
}
