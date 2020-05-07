import React from "react";
import { DisplayCodeContainer } from "./styles/displayCodeStyles";
import ReleaseNotes from "./components/releaseNotes/ReleaseNotes";

export default function DisplayCode() {
	return (
		<DisplayCodeContainer>
			<ReleaseNotes />
		</DisplayCodeContainer>
	);
}
