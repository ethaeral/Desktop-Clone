import React from "react";
import StripedBackground from "./components/stripedBackground/StripedBackground";
import { PageContainer } from "./styles/webPageStyle";

export default function WebPageView() {
	return (
		<PageContainer>
			<StripedBackground />
			{/* <nav>Styled like chrom bars - the book marks will be the nav</nav>
			<header>
				Full Name -Picture - Contact info - Personal mission what I do and why
			</header>
			<main>
				<section>Skills</section>
				<section>Projects</section>
			</main>
			<footer>Please look at my website desktop version</footer> */}
		</PageContainer>
	);
}
