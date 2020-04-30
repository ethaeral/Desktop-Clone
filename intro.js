import React from "react";
function contactMe() {
	return "alina.nguon@gmail.com";
}
function introduction() {
	const Hello = "Currently focused on developing for developers.";
	return (
		<div>
			<h1>{Hello}</h1>
			<form
				onSubmit={() => {
					contactMe();
				}}>
				<input type='checkbox' name='Javascript' checked />
				<input type='checkbox' name='Javascript' checked />
				<input type='checkbox' name='Javascript' checked />
				<button type='submit'>
					I'm interested in working in different languages and frameworks
				</button>
			</form>
		</div>
	);
}
introduction();

