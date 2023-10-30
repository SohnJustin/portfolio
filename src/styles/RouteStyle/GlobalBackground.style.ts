import styled, { createGlobalStyle } from "styled-components";

const Background = createGlobalStyle`
  body {
    background: #36393f;
  }
`;
const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding-top: 10%;
  align-items: center;
  color: white;
`;
export { Background, PageContainer };
