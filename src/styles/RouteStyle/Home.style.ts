import styled from "styled-components";
import { up, down, createTheme } from "styled-breakpoints";
import SelfShot from "../../resources/selfshot.jpg";

const themeWithBreakpoints = createTheme({
  tablet: "768px",
  desktop: "1024px",
} as const);

const MobileFirstIntroduction = styled.h1`
  //mobile
  //margin-right: 50%;
  font-size: 45px;
  ::before {
    content: "Justin Sohn";
  }

  //tablet
  @media screen and (min-width: 768px) {
    font-size: 60px;
    padding-left: 0px;
    text-align: center;
    justify-content: center;
    content: "Justin Sohn";
  }

  //desktop
  @media screen and (min-width: 1024px) {
    width: 50%;
    font-size: 60px;
    text-align: left;
    justify-content: center;
    padding-left: 5%;
  }
`;
/*
const Introduction = styled.h1`
  font-size: 60px;
  text-align: left;
  justify-content: center;
  padding-left: 5%;
  @media screen and (max-width: 901px) {
    padding-left: 0px;
    text-align: center;
    width: 95%;
    justify-content: center;
  }
`;
*/

const MobileFirstPrompt = styled.div`
  //mobile
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 10%;
  width: 80%;
  justify-content: center;
  text-align: center;
  ::before {
    content: "Hi! My name is Justin Sohn and I am currently attend California State University of Fullerton and have been putting my focus in become a Front End Web Developer.";
  }

  //tablet
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    margin-top: 10px;
    font-size: 20px;
    width: 85%;
    padding-bottom: 10%;
  }

  //desktop
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const Prompt = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
  padding-left: 50px;
  margin-top: 10px;
  font-size: 20px;
  width: 50%;
  padding-bottom: 10%;
  @media screen and (max-width: tablet) {
    padding-left: 10%;
    width: 80%;
    justify-content: center;
    text-align: center;
  }
`;
const MobileSkills = styled.div`
  font-size: 25px;
  text-align: center;
  justify-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const MobileSkillList = styled.h6`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const DesktopLanguage = styled.div`
  font-size: 25px;
  text-align: left;
  justify-content: space-between;
  padding-left: 15%;
  padding-top: 10%;
  width: 50%;
  content: "Programming Language", "Skills";
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
const DesktopSkills = styled.h3`
  font-size: 25px;
  text-align: left;
  justify-content: left;
  padding-left: 15%;
  padding-top: 10%;
  width: 50%;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const DesktopHobbies = styled.h3``;
const List = styled.span`
  font-size: 20px;
`;
const DesktopSkillList = styled.li`
  //padding-left: 15%;
  justify-content: left;
  text-align: left;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

const BulletPoint = styled.ul`
  padding-left: 15%;
`;
/*
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
*/
const StyleSelfShot = styled.img`
  max-height: 60vw;
  max-width: 45vh;
  height: auto;
  width: auto;
  float: right;
  margin-right: 5vw;
  @media only screen and (max-width: 950px) {
    background-color: blue;
    float: none;
    margin-right: 0vw;
  }
  @media screen and (max-width: 600px) {
    max-height: 70vw;
    max-width: 70vw;
  }
`;
export {
  // HomeContainer,
  //Introduction,
  // Background,
  // CardWrapper,
  Prompt,
  MobileSkills,
  List,
  StyleSelfShot,
  MobileSkillList,
  DesktopSkillList,
  DesktopLanguage,
  DesktopSkills,
  DesktopHobbies,
  BulletPoint,
  MobileFirstIntroduction,
  MobileFirstPrompt,
};
