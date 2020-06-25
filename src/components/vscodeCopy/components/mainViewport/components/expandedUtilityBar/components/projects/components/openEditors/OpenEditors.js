// Libraries
import React, {useContext} from "react";
import { CodeContext } from "../../../../../../../../../../modules/codeContext";

export default function OpenEditors() {
	const { currentProject } = useContext(CodeContext);
	return (
		<div>
			<p>
			{currentProject.current ? (
				<p>{currentProject[`${currentProject.current}`].name}</p>
			) : (
				""
			)}
      </p>
		</div>
	);
}
