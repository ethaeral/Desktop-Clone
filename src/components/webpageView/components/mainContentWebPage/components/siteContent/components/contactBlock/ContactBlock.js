// Libraries
import React from "react";

// Assets
import ProfileImage from "../../../../../../../../assets/profile.jpg";
import Email from "../../../../../../../../assets/webpage/email.svg";
import Github from "../../../../../../../../assets/webpage/github.svg";
import Linkedin from "../../../../../../../../assets/webpage/linkedin.svg";
import Location from "../../../../../../../../assets/webpage/location.svg";

// Styles
import {
	SideContent,
	IconHolder,
	BlockHolder,
} from "./styles/contactBlockStyles";

// Components
import Icon from "../../../icons/Icon";

export default function ContactBlock(props) {
	return (
		<BlockHolder mobileOnly={props.mobileOnly} >
			<SideContent maximized={props.state.maxmized}  >
				<img src={ProfileImage} alt='richany nguon' />
				<IconHolder>
					<Icon
						src={Email}
						alt={"email icon"}
						link={false}
						linkTitle={"alina.nguon@gmail.com"}
					/>
					<Icon
						src={Location}
						alt={"location icon"}
						link={false}
						linkTitle={"Greater Boston, MA"}
					/>
					<Icon
						src={Linkedin}
						alt={"linkedin icon"}
						link={"https://www.linkedin.com/in/richany-nguon/"}
						linkTitle={"richany-nguon"}
					/>
					<Icon
						src={Github}
						alt={"github icon"}
						link={"https://github.com/richanynguon"}
						linkTitle={"richanynguon"}
					/>
				</IconHolder>
			</SideContent>
		</BlockHolder>
	);
}
