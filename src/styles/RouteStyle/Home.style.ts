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
    content: "Ipsum velit non est eu magna consequat do ea elit. Veniam ullamco ut ea quis dolore ut est eu eu magna qui in reprehenderit. Nisi occaecat labore occaecat exercitation dolor esse deserunt mollit magna adipisicing nulla enim mollit consequat. Laborum Lorem commodo ea ut proident. Voluptate labore consequat nulla labore adipisicing nisi velit Lorem ipsum Lorem ea consectetur exercitation.";
  }
  //tablet
  @media screen and (min-width: 769px) {
    padding-left: 50px;
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
  //mobile

  font-size: 16px;
  text-decoration: underline;
  padding-top: 5vw;
  padding-left: 5%;
  padding-right: 5%;
  display: inline;
  font-size: 12px;
  text-align: center;
  justify-items: space-evenly;
  width: 5%;
`;

const MobileSkillList = styled.h6`
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
const DesktopSkillList = styled.li`
  display: flexbox;
  width: 40%;
  justify-content: space-evenly;
  text-align: left;
  font-size: 12px;

  // @media screen and (max-width: 769px) {
  //   display: none;
  // }
`;
const BulletPoint = styled.ul`
  /* padding-left: 5%;
  padding-right: 5%; */
  display: inline-block;
  font-size: 12px;
  width: 25vw;
  text-align: left;
  justify-content: space-between;
`;
const List = styled.span`
  font-size: 20px;
`;

const DesktopHobbies = styled.h3``;

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
};
