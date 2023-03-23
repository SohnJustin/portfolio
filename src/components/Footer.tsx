import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
// import "../styles/RouteStyle/Footer.css";
import { Background } from "../styles/RouteStyle/GlobalBackground.style";
import {
  FooterContainer,
  SocialMediaIcon,
  CopyRight,
  PageContainer,
  ContentWrap,
} from "../styles/RouteStyle/Footer.style";
function Footer() {
  return (
    <PageContainer>
      <FooterContainer>
        <div className="socialMedia">
          <a href="https://www.instagram.com/justinsohn2/" target="_blank">
            <SocialMediaIcon>
              <InstagramIcon />
            </SocialMediaIcon>
          </a>

          <a href="https://twitter.com/Sustin_John/" target="_blank">
            <SocialMediaIcon>
              <TwitterIcon />
            </SocialMediaIcon>
          </a>
          <a href="https://www.facebook.com/justin.sohn.14" target="_blank">
            <SocialMediaIcon>
              <FacebookIcon />
            </SocialMediaIcon>
          </a>
        </div>
        <CopyRight> &copy; 2022 jsohn.app</CopyRight>
      </FooterContainer>
    </PageContainer>
  );
}

export default Footer;
