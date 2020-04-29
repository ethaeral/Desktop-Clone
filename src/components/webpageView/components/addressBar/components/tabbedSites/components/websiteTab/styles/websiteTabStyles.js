import styled from "styled-components";

export const SiteTabContainer = styled.div`
	border-top: #080809 1px solid;
	display: flex;
	flex-direction: column;
	color: #fff;
	width: 23%;
	margin-left: -0.5px;
	margin-right: -0.5px;
	&:hover {
		z-index: 1;
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
			animation-duration: 0.5s;
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
					animation-name: expandHeight;
					animation-duration: 0.5s;
					animation-fill-mode: forwards;
				}
			
		}
	}
	background-color: ${(props) => (!props.isActive ? "inherit" : "#323234")};
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
	background-color: ${(props) => (props.isActive ? "#080809 " : "#5a5a5c")};
	display: ${(props) =>
		props.isActive || props.secLastChild || props.firstChild
			? "none"
			: "inherit"};
`;

export const LowerContent = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
