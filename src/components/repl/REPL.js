import React, { useState, useEffect } from "react";
import {
	REPLInput,
	REPLMessage,
	REPLContainer,
	FullInput,
	PTerm,
	Path,
} from "./styles";

export default function REPL({ clear }) {
	const [input, setInput] = useState("");
	const [message, setMessage] = useState(["Unrecognized command type /contact"]);

	useEffect(() => {
		if (clear === true) {
			setInput("");
			setMessage([]);
		}
	}, [clear]);

	function getResponse(givenInput) {
		const command = {
			"/contact": "alina.nguon@gmail.com",
		};
		if (command.hasOwnProperty(givenInput)) {
			return command[givenInput];
		} else {
			return "Unrecognized command type /contact";
		}
	}
	return (
		<REPLContainer>
			<REPLMessage>
				{message.map((m) => (
					<Path key={`${Math.random()}`}>
						<PTerm color='#78f09a'>visitor@guest</PTerm>
						<PTerm color='#f6f6f4'>:</PTerm>
						<PTerm color='#d6b4f7'>~/Desktop/portfolio</PTerm>
						<PTerm color='#f6f6f4'>$</PTerm>
						<PTerm color='#f6f6f4' margin='5px'>
							{m}
						</PTerm>
					</Path>
				))}
			</REPLMessage>
			<FullInput>
				{" "}
				<Path key={`${Math.random()}`}>
					<PTerm color='#78f09a'>visitor@guest</PTerm>
					<PTerm color='#f6f6f4'>:</PTerm>
					<PTerm color='#d6b4f7'>~/Desktop/portfolio</PTerm>
					<PTerm color='#f6f6f4'>$</PTerm>
				</Path>
				<REPLInput
					type='text'
					value={input}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							const reply = getResponse(input);
							setMessage([...message, input, reply]);
							setInput("");
						}
					}}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				/>
			</FullInput>
		</REPLContainer>
	);
}
