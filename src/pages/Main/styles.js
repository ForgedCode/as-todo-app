import styled from "styled-components";
import { motion } from "framer-motion";
import { v, b, color } from "../../styles/variables";

export const Main = styled(motion.main)`
	max-width: 1920px;
	width: 100%;
	min-height: 100vh;
	padding: ${v.smallDist};

	@media ${b.medium} {
		padding: ${v.largeDist};
	}

	@media ${b.large} {
		padding: ${v.xxLargeDist};
	}

	.app-title {
		text-align: center;
		margin-bottom: ${v.mediumDist};

		.glitch-title {
			font-size: 5rem;
			font-family: "Bebas Neue", cursive;
			letter-spacing: 1rem;

			@media ${b.medium} {
				font-size: 10rem;
			}

			&.fire {
				animation: glitch 1s ease-in-out infinite alternate-reverse;
			}

			@keyframes glitch {
				0% {
					text-shadow: 2px 2px 0px ${color.oceanBlue};
				}
				25% {
					text-shadow: 3px -2px 0px ${color.oceanBlue};
				}
				26% {
					text-shadow: -3px 3px 0px ${color.oceanBlue};
				}
				50% {
					text-shadow: 2px 1px 0px ${color.oceanBlue};
				}
				75% {
					text-shadow: -3px -2px 0px ${color.oceanBlue};
				}
				76% {
					text-shadow: 3px 3px 0px ${color.oceanBlue};
				}
			}
		}
	}
`;
