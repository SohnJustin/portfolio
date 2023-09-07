import styled, { createGlobalStyle } from "styled-components";

const Background = createGlobalStyle`
  body {
    background: #36393f;
  }
`;

// how to keep the footer at the bottom of the page
// https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/
const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 10%;
  align-items: center;
  color: white;
`;
export { Background, PageContainer };
