import React from "react";
import {
	SkillContainer,
	SkillsTable,
	SkillList,
	SkillItem,
	SkillsSection,
} from "./styles/skillStyles";
import { H3 } from "../../styles/siteContentStyles";

export default function SkillSection() {
	return (
		<SkillContainer>
			<SkillsTable>
				<SkillsSection>
					<H3 bold>Programming Languages</H3>
					<SkillList>
						<SkillItem>JavaScript</SkillItem>
						<SkillItem>Python</SkillItem>
						<SkillItem>TypeScript</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>Runtime Enviroment</H3>
					<SkillList>
						<SkillItem>NodeJs</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>Frameworks</H3>
					<SkillList>
						<SkillItem>ReactJs</SkillItem>
						<SkillItem>ExpressJs</SkillItem>
						<SkillItem>Flask</SkillItem>
						<SkillItem>Django</SkillItem>
						<SkillItem>NestJs</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>State Management Libraries</H3>
					<SkillList>
						<SkillItem>Redux</SkillItem>
						<SkillItem>Apollo Client</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>Testing Libraries</H3>
					<SkillList>
						<SkillItem>Jest</SkillItem>
						<SkillItem>Supertest</SkillItem>
						<SkillItem>@testing-libary</SkillItem>
					</SkillList>
				</SkillsSection>

				<SkillsSection>
					<H3 bold>Database</H3>
					<SkillList>
						<SkillItem>Postgresql</SkillItem>
						<SkillItem>SQLite</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>Database Query Languages/ Tools</H3>
					<SkillList>
						<SkillItem>KnexJs</SkillItem>
						<SkillItem>GraphQL</SkillItem>
						<SkillItem>TypeOrm</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold>Platforms</H3>
					<SkillList>
						<SkillItem>Google App Engine</SkillItem>
						<SkillItem>Heroku</SkillItem>
						<SkillItem>Vercel (Zeit)</SkillItem>
						<SkillItem>Netlify</SkillItem>
					</SkillList>
				</SkillsSection>

				<SkillsSection>
					<H3 bold> Operating Systems </H3>
					<SkillList>
						<SkillItem>Linux</SkillItem>
						<SkillItem>Windows</SkillItem>
					</SkillList>
				</SkillsSection>
				<SkillsSection>
					<H3 bold> Version Control </H3>
					<SkillList>
						<SkillItem>Git</SkillItem>
					</SkillList>
				</SkillsSection>
			</SkillsTable>
		</SkillContainer>
	);
}
