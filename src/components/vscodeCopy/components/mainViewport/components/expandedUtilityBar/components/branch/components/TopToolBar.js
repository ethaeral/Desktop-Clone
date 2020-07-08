import React from "react";
import { BarToolContainer, BranchIconHolder } from "./branchComponentStyles";
import { UtilityIcon } from "../../../../../../utilityIcon/UtilityIcon";
import Source from '../../../../../../../../../assets/utilityBar/Source.png'
import Source1 from '../../../../../../../../../assets/utilityBar/Source1.png'
import Source2 from '../../../../../../../../../assets/utilityBar/Source2.png'
import Source3 from '../../../../../../../../../assets/utilityBar/Source3.png'
import SourceCommit from '../../../../../../../../../assets/utilityBar/SourceCommit.png'
import SourceText from '../../../../../../../../../assets/utilityBar/sourceText.png'
export default function BranchToolBar() {
	return (
		<BarToolContainer>
			<UtilityIcon inactive={SourceText}/>
      <BranchIconHolder>
      <UtilityIcon inactive={Source}/>
      <UtilityIcon inactive={SourceCommit}/>
      <UtilityIcon inactive={Source2}/>
      <UtilityIcon inactive={Source3}/>
      </BranchIconHolder>
		</BarToolContainer>
	);
}
