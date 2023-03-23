import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  Background,
  PageContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
function Contacts() {
  return (
    <motion.div
      className="contacts"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <PageContainer>
        <div className="contacts">
          <h1>You can contact me through these apps.</h1>
          <div className="contactIcon">
            <a href="https://github.com/NotSohn" target="_blank">
              <GitHubIcon sx={{ color: "white" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/justin-sohn-a1b858215/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "white" }} />
            </a>
            <a href="mailto:me@jsohn.dev" target="_blank">
              <EmailIcon sx={{ color: "white" }} />
            </a>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default Contacts;
