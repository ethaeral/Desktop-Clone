import React from "react";
function contactMe() {
	return "alina.nguon@gmail.com";
}
function introduction() {
	const Hello = "Focused on developing tools for engineers";
	return (
		<div>
			<h1>{Hello}</h1>
			<form
				className='preferred-stack'
				onSubmit={() => {
					contactMe();
				}}>
				<input name='Javascript' type='checkbox' checked />
				<input name='React' type='checkbox' checked />
				<input name='Node' type='checkbox' checked />
				<input name='Postgresql' type='checkbox' checked />
				<button type='submit'>
					Will switch stack depending on the product
				</button>
			</form>
		</div>
	);
}
introduction();


