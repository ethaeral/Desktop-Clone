import React, { useState } from "react";
import { REPLInput, REPLMessage } from "./styles";

export default function REPL() {
	const [message, setMessage] = useState([
		"Unrecognized command type /help to see all commands",
	]);
	return (
		<div>
			<REPLMessage>
				{message.map((m) => (
					<p>
						{m}
						<br />
					</p>
				))}
			</REPLMessage>
			<REPLInput
				type='text'
				onChange={(e) => {
					if (e.key === "Enter") {
						setMessage([...message, e.target.value]);
					}
				}}
			/>
		</div>
	);
}
