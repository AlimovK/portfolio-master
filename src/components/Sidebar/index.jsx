import React from "react";
import rasm from "../../assets/img/K.png";
import {
  Container,
  IconWrapper,
  Github,
  // Gmail,
  Item,
  Line,
  Linkedin,
  LogoWrapper,
  Logo,
  Des,
  Wrapper,
} from "./style";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper to={"/"}>
        <Logo src={rasm} alt="logo" />
        <Des>Web developer</Des>
      </LogoWrapper>
      <Wrapper>
        <Item to={"/about"} top>
          About
        </Item>
        <Item to={"/skills"}>My skills</Item>
        <Item to={"/work"}>Work</Item>
        <Item to={"/contact"}>Contact</Item>
      </Wrapper>
      <IconWrapper>
        <a target="_blank" href="https://github.com/AlimovK">
          <Github />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/alimov-kamron/">
          <Linkedin />
        </a>
      </IconWrapper>
    </Container>
  );
};

export default Sidebar;
