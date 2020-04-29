// Libraries
import React from "react";

// Styles
import {
	IpBarContainer,
	RightNavButtons,
	IPAddressBar,
	RightIPBar,
	LeftIPBar,
	LeftUtilityButtons,
	IpBarIcons,
	BackButton,
	Separator,
} from "./styles/ipBarStyles";

// Assets
import IPLActions from "../../../../../../assets/webpage/IPLActions.png";
import IPLBookmark from "../../../../../../assets/webpage/IPLBookmark.png";
import IPLSave from "../../../../../../assets/webpage/IPLSave.png";
import IPRInfo from "../../../../../../assets/webpage/IPRInfo.png";
import IPRTracker from "../../../../../../assets/webpage/IPRTracker.png";
import LUAccount from "../../../../../../assets/webpage/LUAccount.png";
import LUBooks from "../../../../../../assets/webpage/LUBooks.png";
import LUMenu from "../../../../../../assets/webpage/LUMenu.png";
import LUSidebar from "../../../../../../assets/webpage/LUSidebar.png";
import LUTools from "../../../../../../assets/webpage/LUTools.png";
import RNBack from "../../../../../../assets/webpage/RNBack.png";
import RNForward from "../../../../../../assets/webpage/RNForward.png";
import RNHouse from "../../../../../../assets/webpage/RNHouse.png";
import RNRefresh from "../../../../../../assets/webpage/RNRefresh.png";

export default function IpBar() {
	return (
		<IpBarContainer>
			<RightNavButtons>
				<BackButton src={RNBack} />
				<IpBarIcons src={RNForward} />
				<IpBarIcons src={RNRefresh} />
				<IpBarIcons src={RNHouse} />
			</RightNavButtons>
			<IPAddressBar>
				<RightIPBar>
					<IpBarIcons src={IPRTracker} />
					<Separator />
					<IpBarIcons src={IPRInfo} />
					Words
				</RightIPBar>
				<LeftIPBar>
					<IpBarIcons src={IPLActions} />
					<IpBarIcons src={IPLSave} />
					<IpBarIcons src={IPLBookmark} />
				</LeftIPBar>
			</IPAddressBar>
			<LeftUtilityButtons>
				<IpBarIcons src={LUTools} />
				<IpBarIcons src={LUBooks} />
				<IpBarIcons src={LUSidebar} />
				<IpBarIcons src={LUAccount} />
				<Separator />
				<IpBarIcons src={LUMenu} />
			</LeftUtilityButtons>
		</IpBarContainer>
	);
}
