import React from "react";
import {
  Container,
  Item,
  Left,
  Right,
  Title,
  TitleWrapper,
  Wrapper,
} from "./style";
import "./style.css";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left />
        <Title className="title">Alimov</Title>
        <Right />
      </Wrapper>
      <Wrapper.Item>
        <Item>Home</Item>
        <Item>Education</Item>
        <Item>Experience</Item>
        <Item>Projects</Item>
        <Item>Contact me</Item>
      </Wrapper.Item>
    </Container>
  );
};

export default Navbar;
