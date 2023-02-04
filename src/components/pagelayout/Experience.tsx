import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  Background,
  HomeContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
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
      <HomeContainer>
        <div className="about">
          {" "}
          <h1>This is the Experiences</h1>
        </div>
      </HomeContainer>
    </motion.div>
  );
}

export default Experiences;
