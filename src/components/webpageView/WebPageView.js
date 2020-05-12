// Libraries
import React, { useContext } from "react";

// Components
import WindowBar from "../windowBar/WindowBar";
import AddressBar from "./components/addressBar/AddressBar";

// Styles
import MainContentWebPage from "./components/mainContentWebPage/MainContentWebPage";
import { PageContainer } from "./styles/webPageStyle";

// Context
import WindowsContext from "../../modules/windowContext";

export default function WebPageView(props) {
	const { statefulWindows, setWindowState } = useContext(WindowsContext);
	return (
		<PageContainer
			ref={props.reference}
			hidden={
				statefulWindows.homepage.minimized || statefulWindows.homepage.closed
			}
			maximized={statefulWindows.homepage.maximized}
			z={statefulWindows.homepage.z}
			onClick={() => {
				const addCounter = statefulWindows.zCounter++;

				setWindowState({
					...statefulWindows,
					zCounter: addCounter,
					homepage: {
						...statefulWindows.homepage,
						z: addCounter,
					},
				});
			}}>
			<WindowBar
				title={"Richany Nguon - Firefox Developer Edition"}
				type={"homepage"}
				tabbedTitle={"Firefox"}
			/>
			<AddressBar />
			<MainContentWebPage state={statefulWindows.homepage} counter={statefulWindows.zCounter}/>
		</PageContainer>
	);
}
