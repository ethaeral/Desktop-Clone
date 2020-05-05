import React from "react";
import {
	TabModalContainer,
	OpenModalContainer,
	TopButton,
} from "./styles/tabModalStyles";
import {
	CircleControl,
	ShadowClone,
} from "../../../../../windowBar/components/controlModal/styles/controlModalStyle";
import Jiji from "../../../../../../assets/webpage/jiji.gif";
export default function TabModal(props) {
	const { state, setState } = props;
	return (
		<TabModalContainer
			isOpen={state.modalIsOpen.tabbedBar}
			onClick={(e) => {
				e.stopPropagation();
				setState({
					...state,
					modalIsOpen: { ...state.modalIsOpen, tabbedBar: false },
				});
			}}>
			<OpenModalContainer>
				<TopButton>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setState({
								...state,
								tabbedWindows: state.tabbedWindows.filter(
									(entry) => entry.type !== "homepage"
								),
								homepage: {
									...state.homepage,
									maximized: false,
									minimized: false,
									closed: false,
								},
								modalIsOpen: { ...state.modalIsOpen, windowBar: false },
							});
						}}>
						<CircleControl tabControl={true}>
							<ShadowClone />
							<span>&#10138;</span>
						</CircleControl>
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							setState({
								...state,
								tabbedWindows: state.tabbedWindows.filter(
									(entry) => entry.type !== "homepage"
								),
								homepage: {
									...state.homepage,
									maximized: false,
									minimized: false,
									closed: true,
								},
								modalIsOpen: { ...state.modalIsOpen, windowBar: false },
							});
						}}>
						<CircleControl exit={true} tabControl={true}>
							<ShadowClone />
							<span>&#215;</span>
						</CircleControl>
					</button>
				</TopButton>
				<CircleControl anchor={true} tab={true}>
					<ShadowClone anchor={true} tab={true} />
					<img src={Jiji} alt='jiji kiki delivery service cat' />
				</CircleControl>
			</OpenModalContainer>
		</TabModalContainer>
	);
}
