import React from "react";
import {
	ModalContianer,
	ControlContainer,
	CircleControl,
	ShadowClone,
	ModalMaxWin,
} from "./styles/controlModalStyle";

import Kodama from "../../../../assets/webpage/kodama.gif";

export default function ControlModal(props) {
	const { statefulWindows, setWindowState, tabbedTitle, type } = props;
	return (
		<ModalContianer
			isOpen={statefulWindows.modalIsOpen.windowBar}
			onClick={(e) => {
				e.stopPropagation();
				setWindowState({
					...statefulWindows,
					modalIsOpen: { ...statefulWindows.modalIsOpen, windowBar: false },
				});
			}}>
			<ControlContainer>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setWindowState({
							...statefulWindows,
							tabbedWindows: [
								...statefulWindows.tabbedWindows,
								{ tabbedTitle, type },
							],
							homepage: {
								...statefulWindows.homepage,
								maximized: false,
								minimized: true,
								closed: false,
							},
							modalIsOpen: { ...statefulWindows.modalIsOpen, windowBar: false },
						});
					}}>
					<CircleControl>
						<ShadowClone />
						&#8722;
					</CircleControl>
				</button>

				<CircleControl anchor={true}>
					<ShadowClone anchor={true} />
					<img src={Kodama} alt='soot gif' />
				</CircleControl>

				<button
					onClick={(e) => {
						e.stopPropagation();
						setWindowState({
							...statefulWindows,
							homepage: {
								...statefulWindows.homepage,
								maximized: !statefulWindows.homepage.maximized,
								minimized: false,
								closed: false,
							},
							modalIsOpen: { ...statefulWindows.modalIsOpen, windowBar: false },
						});
					}}>
					<CircleControl center={true}>
						<ShadowClone center={true} />
						<ModalMaxWin />
					</CircleControl>
				</button>
				<button
					onClick={(e) => {
						e.stopPropagation();
						setWindowState({
							...statefulWindows,
							homepage: {
								...statefulWindows.homepage,
								maximized: false,
								minimized: false,
								closed: true,
							},
							modalIsOpen: { ...statefulWindows.modalIsOpen, windowBar: false },
						});
					}}>
					<CircleControl exit={true}>
						<ShadowClone />
						&#215;
					</CircleControl>
				</button>
			</ControlContainer>
		</ModalContianer>
	);
}
