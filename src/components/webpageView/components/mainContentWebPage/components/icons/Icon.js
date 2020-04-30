import React from "react";
import { IconContainer } from "./styles/iconStyles";

export default function Icon(props) {
	return (
		<IconContainer>
			<img className='icon' src={props.src} alt={props.alt} />
			{props.link ? (
				<a href={props.link}>{props.linkTitle}</a>
			) : (
				props.linkTitle
			)}
		</IconContainer>
	);
}
