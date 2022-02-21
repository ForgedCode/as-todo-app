import styled from "styled-components";
import { motion } from "framer-motion";
import { v } from "../../styles/variables";

export const SForm = styled(motion.form)`
	display: flex;
	justify-content: center;
	margin-bottom: ${v.xLargeDist};
`;
