import React from "react";
import { motion } from "framer-motion";
import pageTransition from "../../styles/pageVariant";
import pageVariant from "../../styles/pageVariant";
import {
  MobileFirstIntroduction,
  StyleSelfShot,
  MobileSkillList,
  DesktopSkillList,
  BulletPoint,
  DesktopHobbies,
  MobileFirstPrompt,
  MobileFirstSkills,
  DesktopSkills,
  DesktopSkillPrompt,
} from "../../styles/RouteStyle/Home.style";
import {
  Background,
  PageContainer,
} from "../../styles/RouteStyle/GlobalBackground.style";
import "../../resources/resume.json";
import { Typography } from "@mui/material";
import SelfShot1 from "../../resources/selfshot1.jpg";
import SelfShot from "../../resources/selfshot.png";
import { Analytics } from "@vercel/analytics/react";

function Home() {
  return (
    <motion.div
      className="home"
      initial="in"
      animate="ani"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <Background />
      <PageContainer>
        <StyleSelfShot src={SelfShot1} />
        <MobileFirstIntroduction />
        <MobileFirstPrompt />
        <Analytics />
        <MobileFirstSkills>Programming Languages</MobileFirstSkills>
        <MobileFirstSkills>Skills</MobileFirstSkills>
        <BulletPoint>
          <DesktopSkillList>JavaScript</DesktopSkillList>
          <DesktopSkillList>TypeScript</DesktopSkillList>
          <DesktopSkillList>C</DesktopSkillList>
          <DesktopSkillList>C++</DesktopSkillList>
          <DesktopSkillList>Java</DesktopSkillList>
          <DesktopSkillList>Python</DesktopSkillList>
          <DesktopSkillList>Intel x86_64 YASM</DesktopSkillList>
        </BulletPoint>
        <BulletPoint>
          <DesktopSkillList>ReactJS</DesktopSkillList>
          <DesktopSkillList>Shellscript</DesktopSkillList>
          <DesktopSkillList>HTML</DesktopSkillList>
          <DesktopSkillList>CSS</DesktopSkillList>
          <DesktopSkillList>MaterialUI</DesktopSkillList>
          <DesktopSkillList>Styled Components</DesktopSkillList>
          <DesktopSkillList>PyQT/QTDesigner</DesktopSkillList>
          <DesktopSkillList>PySide6</DesktopSkillList>
          <DesktopSkillList>Github</DesktopSkillList>
        </BulletPoint>
        <DesktopSkills>Programming Languages</DesktopSkills>
        <DesktopSkillPrompt>
          C/C++, Javascript/Typescript, Python, Java, Intel X86_64 YASM Assembly
        </DesktopSkillPrompt>
        <DesktopSkills> Skills </DesktopSkills>
        <DesktopSkillPrompt>
          ReactJS, Shellscript, HTML, CSS, MaterialUI, Media Query, Styled
          Components, PyQT/QtDesigner, Pyside6, Github
        </DesktopSkillPrompt>
        <DesktopSkills> Hobbies </DesktopSkills>
        <DesktopSkillPrompt>
          Current hobbies that I like to do is play video games such as League
          of Legends, VALORANT, osu!. I also enjoy to go hiking and do video
          editing on my spare time.
        </DesktopSkillPrompt>
        <MobileSkillList>Hobbies</MobileSkillList>
        <MobileSkillList>
          Current hobbies I like to do is playing video games, video editing,
          and Coding!
        </MobileSkillList>
      </PageContainer>
    </motion.div>
  );
}

export default Home;
