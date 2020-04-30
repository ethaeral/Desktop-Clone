// Libraries
import React from "react";

// Styles
import { BookMarkContainer } from "./styles/bookMarkStyles";

export default function BookMarkTab(props) {
	const { title, id } = props;

	return (
		<BookMarkContainer>
			<button
				onClick={async (e) => {
					e.stopPropagation();
					const el = await document.getElementById(`scroll`);
					const content = await document.getElementById(`${id}`);
					console.log(el, content.offsetTop);
					el.scrollTop = content.offsetTop;
					console.log(el.scrollTop, content.scrollTop);
				}}>
				{title}
			</button>
		</BookMarkContainer>
	);
}
