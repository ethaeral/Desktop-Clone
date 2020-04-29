import styled from "styled-components";

export const SiteTabContainer = styled.div`
	border-top: #080809 1px solid;
	border-bottom: ${(props) => (!props.isActive ? "1px solid #1a1a1b" : "none")};
	display: flex;
	flex-direction: column;
	color: #f9f9fa;
	max-width: 225px;
	width: 100%;
	margin-left: -0.5px;
	margin-right: ${(props) => (props.lastChild ? "0px" : "-0.5px")};
	z-index: ${(props) => (props.isActive ? "2" : "0")};
	background-color: ${(props) => (!props.isActive ? "inherit" : "#323234")};
	.removeTab {
		background-image: ${(props) =>
			props.isActive ? `url(${props.activeImage})` : `url(${props.img})`};
	}
	&:hover {
		.removeTab {
			background-image: ${(props) =>
				props.isActive
					? `url(${props.activeImage})`
					: `url(${props.hoverImage})`};
		}
		z-index: 1;
		background-color: ${(props) => (!props.isActive ? "#252526" : "#323234")};
		span {
			@keyframes expandWidth {
				from {
					width: 0;
				}
				to {
					width: 100%;
				}
			}
			animation-name: ${(props) => (props.isActive ? "none" : "expandWidth")};
			animation-duration: 0.25s;
			animation-fill-mode: forwards;
			background-color: ${(props) => (!props.isActive ? "#5a5a5c" : "#0a84ff")};
		}
		div {
			span {
				@keyframes expandHeight {
					from {
						height: 60%;
					}
					to {
						height: 100%;
					}
				}
				animation-name: ${(props) =>
					props.isActive ? "none" : "expandHeight"};
				animation-duration: 0.25s;
				animation-fill-mode: forwards;
			}
		}
	}
`;

export const TopBorder = styled.span`
	align-self: flex-start;
	margin: 0 auto;
	width: ${(props) => (props.isActive ? "100%" : "0%")};
	height: 2px;
	background-color: ${(props) => (props.isActive ? "#0a84ff" : "#0c0c0d")};
`;

export const Border = styled.span`
	height: 60%;
	width: 1px;
	background-color: ${(props) => (!props.isActive ? "#5a5a5c" : "#080809")};
	background-color: ${(props) =>
		props.firstChild && !props.isActive ? "#080809" : "#5a5a5c"};
	display: ${(props) => (props.isActive ? "none" : "inherit")};
`;

export const LowerContent = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const RemoveTab = styled.div`
	background-image: ${(props) => `url(${props.img})`};
	height: 10px;
	width: 10px;
`;

export const TitleContainer = styled.div`
	width: ${(props) => (props.isActive ? "90%" : "90%")};
	margin-left: ${(props) => (props.isActive ? "10px" : "0px")};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const TitleText = styled.div`
	display: flex;
	align-items: center;
	font-family: "Ubuntu";
	font-size: 0.95em;
	img {
		width: 15px;
		margin-right: 5px;
	}
`;
