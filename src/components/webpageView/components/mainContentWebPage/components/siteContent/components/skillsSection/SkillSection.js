// Libraries
import React from "react";

// Styles
import { SkillContainer, SkillsTable } from "./styles/skillStyles";

// Components
import SectionedSkills from "./components/sectionedSkills/SectionedSkills";

export default function SkillSection(props) {
	const { maximized } = props.state;
	return (
		<SkillContainer>
			<SkillsTable>
				<SectionedSkills
					maximized={maximized}
					title={"Programming Languages"}
					items={["JavaScript", "Python", "TypeScript"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Runtime Enviroment"}
					items={["NodeJs"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Frameworks"}
					items={["ReactJs", "ExpressJs", "Flask", "Django", "NestJs"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"State Management Libraries"}
					items={["Redux", "Apollo Client"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Testing Libraries"}
					items={["Jest", "Supertest", "@testing-libary"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Database"}
					items={["Postgresql", "SQLite"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Database Query Languages/ Tools"}
					items={["KnexJs", "GraphQL", "TypeORM"]}
				/>
				<SectionedSkills
					maximized={maximized}
					title={"Platforms"}
					items={["Google App Engine", "Heroku", "Vercel (Zeit)", "Netlify"]}
				/>

				<SectionedSkills
					maximized={maximized}
					title={"Operating Systems"}
					items={["Linux", "Windows"]}
				/>

				<SectionedSkills
					maximized={maximized}
					title={"Version Control"}
					items={["Git"]}
				/>
			</SkillsTable>
		</SkillContainer>
	);
}
