import React from "react";
import "./App.css";
import StripeContainer from "./components/stripes/StripeContainer";
import VscodeContainer from "./components/vscodeCopy/VscodeContainer";


function App() {
	return (
		<div>
			<StripeContainer />
			<VscodeContainer/>
		</div>
	);
}

export default App;
