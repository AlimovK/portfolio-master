import React from "react";
import {
  Container,
  LogoWrapper,
  Logo,
  Wrapper,
  Item,
  Line,
  Des,
  IconWrapper,
  Github,
  Linkedin,
} from "./style";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const ToggleMenu = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Des>Web developer</Des>
      </LogoWrapper>
      <Wrapper>
        <Item to="/about" top>About</Item>
        <Item to="/skills">My Skills</Item>
        <Item to="/work">Work</Item>
        <Item to="/contact">Contact</Item>
      </Wrapper>
      <IconWrapper>
        <Github />
        <Linkedin />
      </IconWrapper>
    </Container>
  );
};

export default ToggleMenu;
