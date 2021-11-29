import React from "react";
import "./style.css";
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
      <LogoWrapper>
        <Logo src={rasm} alt="logo" />
        <Des>Web developer</Des>
      </LogoWrapper>
      <Wrapper>
        <Line />
        <Item>About</Item>
        <Line />
        <Item>My skills</Item>
        <Line />
        <Item>Work</Item>
        <Line />
        <Item>Contact</Item>
        <Line />
      </Wrapper>
      <IconWrapper>
        <Github />
        {/* <Gmail /> */}
        <Linkedin className="hoverIcon" />
      </IconWrapper>
    </Container>
  );
};

export default Sidebar;
