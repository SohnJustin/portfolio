import styled from "styled-components";
import { up, down, createTheme } from "styled-breakpoints";
import SelfShot from "../../resources/selfshot.jpg";

const themeWithBreakpoints = createTheme({
  tablet: "768px",
  desktop: "1024px",
} as const);

const MobileFirstIntroduction = styled.h1`
  //mobile
  font-size: 45px;
  ::before {
    content: "Justin Sohn";
  }

  //tablet
  @media screen and (min-width: 769px) {
    font-size: 60px;
    padding-left: 0px;
    text-align: center;
    justify-content: center;
    content: "Justin Sohn";
  }

  //desktop
  @media screen and (min-width: 1024px) {
    font-size: 60px;
    text-align: left;
    justify-content: center;
    padding-left: 5%;
  }
`;

const MobileFirstPrompt = styled.div`
  //mobile
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 10%;
  width: 85%;
  justify-content: center;
  text-align: center;
  ::before {
    content: "Hello! My name is Justin Sohn and I am currently a student at the California State University, Fullerton. I am a Computer Science major and I am interested in pursuing a career in front-end software engineering. I am currently looking for an internship so please feel free to contact me at through the contact page if you have any questions or concerns. Thank you!";
  }
  //tablet
  @media screen and (min-width: 769px) {
    padding-left: 30px;
    margin-top: 10px;
    font-size: 20px;
    width: 85%;
  }

  //desktop
  @media screen and (min-width: 1024px) {
    text-align: left;
    padding-left: 50px;
    width: 50%;
  }
`;
const MobileFirstSkills = styled.div`
  //Mobile + Tablet
  padding-top: 10%;
  padding-left: 20px;
  font-size: 12px;
  text-decoration: underline;
  display: inline-block;
  font-size: 16px;
  text-align: left;
  width: 40%;

  //desktop
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const DesktopSkills = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    //Desktop view only
    display: flex;
    padding-left: 5%;
    padding-top: 5%;
    font-size: 24px;
    text-decoration: underline;
    text-align: left;
  }
`;

const DesktopSkillPrompt = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    //Desktop view only
    display: flex;
    padding-top: 20px;
    padding-bottom: 5vw;
    text-align: left;
    padding-left: 8%;
  }
`;
const MobileSkillList = styled.h6`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const DesktopSkillList = styled.li`
  width: 40%;
  justify-content: space-evenly;
  text-align: left;
  font-size: 12px;
`;

const BulletPoint = styled.ul`
  display: inline-block;
  font-size: 12px;
  text-align: center;
  justify-content: space-evenly;
  width: 35%;
  //desktop
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
const List = styled.span`
  font-size: 20px;
`;

const DesktopHobbies = styled.h3``;

const StyleSelfShot = styled.img`
  //Mobile
  max-height: 60vw;
  max-width: 45vh;
  height: auto;
  width: auto;
  float: center;

  //Tablet
  @media screen and (min-width: 769px) {
    float: right;
    max-height: 30vw;
    max-width: 80vw;
  }
  //Desktop
  @media only screen and (min-width: 1024px) {
    float: right;
    margin-right: 5vw;
  }
`;
export {
  //Prompt,
  List,
  StyleSelfShot,
  MobileSkillList,
  DesktopSkillList,
  DesktopHobbies,
  BulletPoint,
  MobileFirstIntroduction,
  MobileFirstPrompt,
  MobileFirstSkills,
  DesktopSkills,
  DesktopSkillPrompt,
};
