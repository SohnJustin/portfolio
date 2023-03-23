import styled, { createGlobalStyle } from "styled-components";

const Background = createGlobalStyle`
  body {
    background: #36393f;
  }
`;
const PageContainer = styled.div`
  height: 100%;
  padding-top: 10%;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;
export { Background, PageContainer };
