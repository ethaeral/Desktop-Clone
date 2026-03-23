// Libraries
import React from "react";

// Styles
import { SearchToolContainer, IconHolder } from "./styles/searchToolStyles";

// Assets
import SearchRefresh from "../../../../../../../../../../assets/utilityBar/searchRefresh.png";
import SearchClear from "../../../../../../../../../../assets/utilityBar/searchClear.png";
import SearchRefreshInactive from "../../../../../../../../../../assets/utilityBar/searchRefreshInactive.png";
import SearchClearInactive from "../../../../../../../../../../assets/utilityBar/searchClearInactive.png";
import AddBox from "../../../../../../../../../../assets/searchBar/add.png";
import AddFile from "../../../../../../../../../../assets/searchBar/addfile.png";
import SearchText from "../../../../../../../../../../assets/searchBar/search.png";
// Components
import UtilityIcon from "../../../../../../../utilityIcon/UtilityIcon";

export default function SearchToolBar(props) {
	const { stateControl } = props;
	const { state, set } = stateControl;
	return (
		<SearchToolContainer>
			<div>
				<UtilityIcon
					type={"refresh"}
					state={state}
					setState={set}
					active={SearchText}
					image={SearchText}
					hover={SearchText}
				/>
			</div>
			<IconHolder>
				<UtilityIcon
					type={"refresh"}
					state={state}
					setState={set}
					active={SearchRefresh}
					image={SearchRefreshInactive}
					hover={SearchRefreshInactive}
				/>
				<UtilityIcon
					type={"clear"}
					state={state}
					setState={set}
					active={SearchClear}
					image={SearchClearInactive}
					hover={SearchClearInactive}
				/>
				<UtilityIcon
					type={undefined}
					state={state}
					setState={set}
					active={AddFile}
					image={AddFile}
					hover={AddFile}
				/>
				<UtilityIcon
					type={"toggle"}
					state={state}
					setState={set}
					active={AddBox}
					image={AddBox}
					hover={AddBox}
				/>
			</IconHolder>
		</SearchToolContainer>
	);
}


