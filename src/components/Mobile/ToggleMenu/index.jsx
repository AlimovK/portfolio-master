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
        <Line />
        <Item to="/about">About</Item>
        <Line />
        <Item to="/skills">My Skills</Item>
        <Line />
        <Item to="/work">Work</Item>
        <Line />
        <Item to="/contact">Contact</Item>
        <Line />
      </Wrapper>
      <IconWrapper>
        <Github />
        <Linkedin />
      </IconWrapper>
    </Container>
  );
};

export default ToggleMenu;
