import React from "react";
import Button from "../Generic/button";
import logo from "../../assets/img/logo1.png";
import { Container, K, Title } from "./style";

const Body = () => {
  return (
    <Container>
      <Title>
        <div>Hi,</div>
        <div>
          I'm
          <K src={logo} />
          amron
        </div>
        <div>web developer</div>
      </Title>
      <Title.des>Front-End Developer</Title.des>
      <Button />
    </Container>
  );
};

export default Body;
