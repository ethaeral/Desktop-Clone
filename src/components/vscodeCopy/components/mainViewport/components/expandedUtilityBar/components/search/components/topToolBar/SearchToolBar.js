// Libraries
import React from "react";

// Styles
import {
	ToolTipDown,
	ToolTipDownContainer,
} from "../../../actionIcon/styles/actionIconStyles";
import { SearchToolContainer } from "./styles/searchToolStyles";

// Assets
import SearchRefresh from "../../../../../../../../../../assets/utilityBar/searchRefresh.png";
import SearchClear from "../../../../../../../../../../assets/utilityBar/searchClear.png";
import SearchNew from "../../../../../../../../../../assets/utilityBar/searchNew.png";
import SearchToggleExpand from "../../../../../../../../../../assets/utilityBar/searchToggleExpand.png";
import SearchToggleExpandInactive from "../../../../../../../../../../assets/utilityBar/searchToggleExpandInactive.png";
import SearchRefreshInactive from "../../../../../../../../../../assets/utilityBar/searchRefreshInactive.png";
import SearchClearInactive from "../../../../../../../../../../assets/utilityBar/searchClearInactive.png";

// Components
import ActionIcon from "../../../actionIcon/ActionIcon";

export default function SearchToolBar(props) {
	const { stateControl } = props;
	const { state, set } = stateControl;
	return (
		<SearchToolContainer>
			<div>
				SEARCH
				<ToolTipDown>
					<ToolTipDownContainer>Search(Ctrl+Shift+F)</ToolTipDownContainer>
				</ToolTipDown>
			</div>
			<ActionIcon
				type={"refresh"}
				state={state}
				setState={set}
				activeImage={SearchRefresh}
				inActiveImage={SearchRefreshInactive}
			/>
			<ActionIcon
				type={"clear"}
				state={state}
				setState={set}
				activeImage={SearchClear}
				inActiveImage={SearchClearInactive}
			/>
			<ActionIcon
				type={undefined}
				state={state}
				setState={set}
				activeImage={SearchNew}
				inActiveImage={undefined}
			/>
			<ActionIcon
				type={"toggle"}
				state={state}
				setState={set}
				activeImage={SearchToggleExpand}
				inActiveImage={SearchToggleExpandInactive}
			/>
		</SearchToolContainer>
	);
}
