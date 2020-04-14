import React from "react";
import styled from "styled-components";
import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";
import Footer from "./components/footer/Footer";
import "./App.css";

const Test = styled.div`
	border: 1px red solid;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
`;

function App() {
	return (
		<Test>
			<StripeContainer />
			<VscodeContainer />
			<Footer />
		</Test>
	);
}

export default App;
