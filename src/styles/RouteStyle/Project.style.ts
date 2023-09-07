import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { css } from "styled-components";

const Project = styled.div``;

const ProjectTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 10%;
  padding-bottom: 5%;
  text-align: center;
  color: white;
`;

const ProjectList = styled.div``;

const ProjectItem = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 300px;
  margin: 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover .something {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
const ProjectItemWrapper = styled.div``;

const ProjectItemImage = styled.div``;

export {
  ProjectItem,
  ProjectTitle,
  ProjectList,
  Project,
  ProjectItemImage,
  ProjectItemWrapper,
};
