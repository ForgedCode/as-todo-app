import styled from "styled-components";
import { motion } from "framer-motion";
import { color, v, b } from "../../styles/variables";

export const STodoList = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 5rem;

	@media ${b.large} {
		flex-direction: row;
		gap: 2rem;
	}

	> div {
		flex-basis: 50%;

		ul {
			display: flex;
			flex-direction: column;
			gap: ${v.largeDist};

			li {
				word-wrap: break-word;
			}
		}

		.todo-progress {
			text-align: center;
			margin-bottom: ${v.mediumDist};
		}

		h2 {
			font-size: 3rem;
			font-family: "Bebas Neue", cursive;
			letter-spacing: 0.5rem;

			@media ${b.medium} {
				font-size: 5rem;
			}
		}
	}
`;
