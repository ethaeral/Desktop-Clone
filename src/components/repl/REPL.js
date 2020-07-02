import React, { useState, useEffect, useRef } from "react";
import {
	REPLInput,
	REPLMessage,
	REPLContainer,
	FullInput,
	PTerm,
} from "./styles";

// script f6f6f4
export default function REPL({ clear }) {
	const REPLRef = useRef(null);
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
			return "$Unrecognized command type /help to see all commands";
		}
	}
	return (
		<REPLContainer ref={}>
			<REPLMessage>
				{message.map((m) => (
					<p>
						{m}
						<br />
					</p>
				))}
			</REPLMessage>
			<FullInput>
				<REPLInput
					type='text'
					value={input}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							const reply = getResponse(input);
							setMessage([
								...message,
								<p>
									<PTerm color='#78f09a'>visitor@guest</PTerm>:
									<PTerm color='#d6b4f7'>~/</PTerm>
								</p>,
								reply,
							]);
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
