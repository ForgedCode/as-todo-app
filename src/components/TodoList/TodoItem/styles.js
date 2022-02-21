import styled from "styled-components";
import { motion } from "framer-motion";
import { color, v, b } from "../../../styles/variables";

export const STodoItem = styled(motion.div)`
	background: radial-gradient(
		circle,
		rgba(98, 135, 248, 0.2) 0%,
		rgba(98, 135, 248, 0.3) 50%,
		rgba(98, 135, 248, 0.4) 100%
	);
	width: 100%;
	min-height: 10vh;
	padding: ${v.mediumDist};
	position: relative;
	display: flex;
	flex-direction: column;
	gap: ${v.mediumDist};

	@media ${b.large} {
		width: 70%;
	}

	li {
		padding: 0 ${v.smallDist};
		border-left: 2px solid ${color.oceanBlue};
		border-right: 2px solid ${color.oceanBlue};
	}

	.btn-container {
		display: flex;
		gap: ${v.smallDist};
	}

	&::before {
		content: "";
		position: absolute;
		width: 30px;
		height: 20px;
		transform: rotate(313deg);
		background: ${color.blue};
		top: -7px;
		left: -13px;
	}

	&::after {
		content: "";
		position: absolute;
		width: 30px;
		height: 20px;
		transform: rotate(133deg);
		background: ${color.blue};
		bottom: -7px;
		right: -13px;
	}
`;
