import React from "react";
import Stripes from "./Stripes";
import "./styles/striped.css";

export default function StripeContainer() {
	return (
		<div className='contianer-stripe'>
			<Stripes />
			<Stripes />
			<div className='stripe-container bottom'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
}
