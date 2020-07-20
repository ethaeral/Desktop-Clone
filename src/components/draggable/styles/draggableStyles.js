// Libaries
import styled from "styled-components";

export const DragContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: ${(props) => (props.maximized ? "100%" : `${props.height}px`)};
	width: ${(props) => (props.maximized ? "100%" : `${props.width}px`)};
	z-index: ${(props) => props.z + 1};
	cursor: grab;
	
`;

export const Container = styled.div`
	display: ${(props) => (props.hidden ? "none" : "block")};
	position: absolute;
	top: ${(props) => (props.y === 0 ? 0 : `${props.y}px`)};
	left: ${(props) => (props.x === 0 ? 0 : `${props.x}px`)};
	bottom: 0;
	right: 0;
	height: ${(props) => (props.maximized ? "100%" : `${props.height}px`)};
	width: ${(props) => (props.maximized ? "100%" : `${props.width}px`)};
	z-index: ${(props) => props.z};
	border-radius: 10px 10px 0px 0px;
`;
