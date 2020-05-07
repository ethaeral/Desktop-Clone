import React from "react";
import { Display } from "./styles/codeDisplayStyles";

import CodeTab from "./components/codeTab/CodeTab";
import DisplayCode from "./components/displayCode/DisplayCode";


export default function CodeDisplay() {
	return (
		<Display>
      <CodeTab/>
      <DisplayCode/>
	
		</Display>
	);
}
