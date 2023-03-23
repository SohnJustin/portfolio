import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  Background,
  PageContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
import { TempExperience } from "../../styles/RouteStyle/Experience.style";
function Experiences() {
  return (
    <motion.div
      className="experiences"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <PageContainer>
        <TempExperience />
      </PageContainer>
    </motion.div>
  );
}

export default Experiences;
