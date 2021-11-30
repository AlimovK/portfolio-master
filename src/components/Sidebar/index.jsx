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
        <Line />
        <Item to={"/about"}>About</Item>
        <Line />
        <Item to={"/skills"}>My skills</Item>
        <Line />
        <Item to={"/work"}>Work</Item>
        <Line />
        <Item to={"/contact"}>Contact</Item>
        <Line />
      </Wrapper>
      <IconWrapper>
        <a href="https://github.com/AlimovK">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/alimov-kamron/">
          <Linkedin />
        </a>
      </IconWrapper>
    </Container>
  );
};

export default Sidebar;
