import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import //ProjectList,
//ProjectItemArea,
//DisplayProject,
//DisplayProjectName,
//BackgroundImage,
"../../styles/RouteStyle/Project.style";
import {
  Background,
  PageContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
import Home from "./Home";
import ProjectItems from "../ProjectItems";

function Projects() {
  return (
    <motion.div
      className="projects"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <PageContainer></PageContainer>
    </motion.div>
  );
}

export default Projects;
