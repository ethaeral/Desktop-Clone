import React from "react";
import { UtilityBar, IconHolder } from "./styles/botUtilityBarStyle";

import branch from "../../../../assets/branch.png";
import commits from "../../../../assets/commits.png";
import notifcations from "../../../../assets/notifcations.png";
import problems from "../../../../assets/problems.png";
import sync from "../../../../assets/sync.png";
import twitterIssue from "../../../../assets/twitterIssue.png";
import UtilityIcon from "./components/utilityIcon/UtilityIcon";

export default function BottomUtilityBar() {
	const today = new Date();
	const date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	const time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	const dateTime = date + " " + time;
	return (
		<UtilityBar>
			<IconHolder>
				<UtilityIcon
					src={branch}
					alt={"gitbranch icon"}
					title={"master*"}
					message={"portfolio (Git) - master*"}
				/>
				<UtilityIcon
					src={sync}
					alt={"sync icon"}
					message={"portfolio (Git) - Synchronize Changes"}
				/>
				<UtilityIcon
					src={problems}
					alt={"problems icon"}
					message={"No Problems"}
				/>
			</IconHolder>
			<IconHolder>
				<UtilityIcon
					src={commits}
					alt={"git commit icon"}
					title={`richanynguon, ${dateTime}`}
					message={"Show Commit Details"}
				/>
				<UtilityIcon title={`Spaces: 2`} message={"Select Indentation"} />
				<UtilityIcon title={`LF`} message={"Select End of Line Sequence"} />
				<UtilityIcon title={`JavaScript`} message={"Select Language Mode"} />
				<UtilityIcon
					src={twitterIssue}
					alt={"twitter issue icon"}
					message={"Tweet Feedback"}
				/>
				<UtilityIcon
					src={notifcations}
					alt={"notification icon"}
					message={"No Notifications"}
				/>
			</IconHolder>
		</UtilityBar>
	);
}
