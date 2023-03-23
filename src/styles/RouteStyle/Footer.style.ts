import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background: #23272a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  position: absolute;
  bottom: 0;
  @media only screen and (max-width: 600px) {
    .footer svg {
      font-size: 50px;
    }
  }
`;
const SocialMediaArea = styled.div`
  color: white;
`;
const SocialMediaLink = styled.a``;
const SocialMediaIcon = styled.div`
  display: inline;
  justify-items: center;
  padding-top: 15px;
  color: white;
  margin-left: 20px;
  margin-right: 20px;

  cursor: pointer;
`;
const CopyRight = styled.p`
  color: white;
`;
const ContentWrap = styled.div`
  padding-bottom: 2.5rem;
`;
const PageContainer = styled.div`
  position: relative;
  min-height: 20vh;
`;

export {
  FooterContainer,
  SocialMediaArea,
  SocialMediaIcon,
  CopyRight,
  SocialMediaLink,
  ContentWrap,
  PageContainer,
};
