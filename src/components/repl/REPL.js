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
	const [message, setMessage] = useState([
		"Unrecognized command type /help to see all commands",
	]);

	useEffect(() => {
		if (clear === true) {
			setInput("");
			setMessage([]);
		}
	}, [clear]);

	function getResponse(givenInput) {
		const command = {
			"/help":
				"\n /contact    Generate contact information for author. \n /twitter Generate twitter information. \n /github Generate github information",
			"/twitter": <a href='https://twitter.com/richanynguon'>Twitter</a>,
			"/github": <a href='https://github.com/richanynguon'>Github</a>,
			"/linkedin": <a href='https://linkedin.com/in/richanynguon'>LinkedIn</a>,
			"/contact": "alina.nguon@gmail.com",
		};
		if (command.hasOwnProperty(givenInput)) {
			return command[givenInput];
		} else {
			return "Unrecognized command type /help to see all commands";
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
						<PTerm color='#f6f6f4'>$</PTerm>{m}
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
								setMessage([...message, reply]);
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
