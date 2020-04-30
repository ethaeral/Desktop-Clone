// Libraries
import React from "react";

// Styles
import { BookMarkContainer } from "./styles/bookMarkStyles";

// Assets
import Soot from "../../../../../../../../assets/webpage/soot.gif";

export default function BookMarkTab(props) {
	const { title, id } = props;

	return (
		<BookMarkContainer>
			<img src={Soot} alt='soot creature from spirited away' />
			<button
				onClick={async (e) => {
					e.stopPropagation();
					const el = await document.getElementById(`scroll`);
					const content = await document.getElementById(`${id}`);
					el.scrollTop = content.offsetTop;
				}}>
				{title}
			</button>
		</BookMarkContainer>
	);
}
