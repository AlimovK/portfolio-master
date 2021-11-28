import React from "react";
import {
  Container,
  IconWrapper,
  Github,
  Gmail,
  Item,
  Line,
  Linkedin,
  LogoWrapper,
} from "./style";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>logo</LogoWrapper>
      <Line />
      <Item>About</Item>
      <Line />
      <Item>My skills</Item>
      <Line />
      <Item>Work</Item>
      <Line />
      <Item>Contact</Item>
      <Line />
      <IconWrapper>
      <Github />
      {/* <Gmail /> */}
      <Linkedin />
        </IconWrapper>
    </Container>
  );
};

export default Sidebar;
