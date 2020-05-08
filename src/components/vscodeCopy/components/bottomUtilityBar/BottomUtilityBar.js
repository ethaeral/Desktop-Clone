import React from "react";
import {
	UtilityBar,
	IconHolder,
	Icon,
	ToolTip,
	ToolTipContainer,
	ToolTipOverflow,
} from "./styles/botUtilityBarStyle";

import branch from "../../../../assets/branch.png";
import commits from "../../../../assets/commits.png";
import notifcations from "../../../../assets/notifcations.png";
import problems from "../../../../assets/problems.png";
import sync from "../../../../assets/sync.png";
import twitterIssue from "../../../../assets/twitterIssue.png";

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
				<Icon>
					<img src={branch} alt='gitbranch icon' />
	         master*
					<ToolTip>
						<ToolTipContainer>portfolio (Git) - master*</ToolTipContainer>
					</ToolTip>
				</Icon>
				<Icon>
					<img src={sync} alt='sync icon' />
					<ToolTip>
						<ToolTipContainer>
							portfolio (Git) - Synchronize Changes
						</ToolTipContainer>
					</ToolTip>
				</Icon>
				<Icon>
					<img src={problems} alt='problems icon' />
					<ToolTip>
						<ToolTipContainer>No Problems</ToolTipContainer>
					</ToolTip>
				</Icon>
			</IconHolder>
			<IconHolder>
				<Icon>
					<img src={commits} alt='git commit icon' />
					richanynguon, {dateTime}
					<ToolTip>
						<ToolTipContainer>Show Commit Details</ToolTipContainer>
					</ToolTip>
				</Icon>
				<Icon>
					Spaces: 2
					<ToolTip>
						<ToolTipContainer>Select Indentation</ToolTipContainer>
					</ToolTip>
				</Icon>
				<Icon>
					LF
					<ToolTipOverflow>
						<ToolTipContainer overflow={"true"}>
							Select End of Line Sequence
						</ToolTipContainer>
					</ToolTipOverflow>
				</Icon>
				<Icon>
					Javascript
					<ToolTipOverflow>
						<ToolTipContainer overflow={"true"}>
							Select Language Mode
						</ToolTipContainer>
					</ToolTipOverflow>
				</Icon>
				<Icon>
					<img src={twitterIssue} alt='twitter issue icon' />
					<ToolTipOverflow>
						<ToolTipContainer overflow={"true"}>Tweet Feedback</ToolTipContainer>
					</ToolTipOverflow>
				</Icon>
				<Icon>
					<img src={notifcations} alt='notification icon' />
					<ToolTipOverflow>
						<ToolTipContainer overflow={"true"}>
							No Notifications
						</ToolTipContainer>
					</ToolTipOverflow>
				</Icon>
			</IconHolder>
		</UtilityBar>
	);
}
