import styled from "styled-components";

const NavBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #23272a;

  @media only screen and (max-width: 900px) {
    .navbar a {
      width: 70px;
    }
  }
`;
const LinksStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
`;
const ToggleButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    .toggleButton {
      display: flex;
    }
    #close a {
      display: none;
    }
  }
  @media only screen and (min-width: 600px) {
    .toggleButton {
      display: none;
    }
    .hiddenLinks {
      display: none;
    }
    #open {
      height: 100px;
    }
    #open .links {
      flex-direction: row;
    }
  }
  & .svg {
    font-size: 50px;
  }
  & .button {
    margin-right: 20px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const Open = styled.object`
  height: 100vh;

  & .links {
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-bottom: 100%;
  }

  & .a {
    width: 100%;
    text-align: center;
  }
`;

export { NavBarWrapper, LinksStyle, ToggleButton, Open };
