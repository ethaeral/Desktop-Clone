import React from "react";
import { BarToolContainer, BranchIconHolder } from "./branchComponentStyles";
import UtilityIcon from "../../../../../../utilityIcon/UtilityIcon";
import Source from "../../../../../../../../../assets/utilityBar/Source.png";
import Source2 from "../../../../../../../../../assets/utilityBar/Source2.png";
import Source3 from "../../../../../../../../../assets/utilityBar/Source3.png";
import SourceCommit from "../../../../../../../../../assets/utilityBar/SourceCommit.png";
import SourceText from "../../../../../../../../../assets/utilityBar/sourceText.png";
export default function BranchToolBar() {
	return (
		<BarToolContainer>
			<UtilityIcon image={SourceText}  hover={SourceText}/>
			<BranchIconHolder>
				<UtilityIcon image={Source} hover={Source}/>
				<UtilityIcon image={SourceCommit} hover={SourceCommit}/>
				<UtilityIcon image={Source2} hover={Source2}/>
				<UtilityIcon image={Source3} hover={Source3}/>
			</BranchIconHolder>
		</BarToolContainer>
	);
}
