import React from "react";
import { SkillItem } from "./styles/itemSkillStyles";
import { H4 } from "../../../../../../styles/siteContentStyles";

export default function ItemSkill(props) {
	return (
		<SkillItem>
			<H4>{props.item}</H4>
		</SkillItem>
	);
}
