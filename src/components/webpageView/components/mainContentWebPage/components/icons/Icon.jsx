// Libraries
import React from "react";

// Styles
import { IconContainer } from "./styles/iconStyles";
import { P } from "../siteContent/styles/siteContentStyles";

export default function Icon(props) {
	return (
		<IconContainer>
			<img className='icon' src={props.src} alt={props.alt} />
			{props.link ? (
				<a href={props.link}>{props.linkTitle}</a>
			) : (
				<P>{props.linkTitle}</P>
			)}
		</IconContainer>
	);
}
