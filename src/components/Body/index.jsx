import React from "react";
import Button from "../Generic/button";
import logo from "../../assets/img/logo1.png";
import { Container, HtmlDes, K, Main, MainWrapper, Title } from "./style";

const Body = () => {
  const html = "<html>";
  const body = "<body>";
  const h1 = ["<h1>", "</h1>"];
  const p = ["<p>", "</p>"];
  return (
    // <MainWrapper>
    <Container>
      <HtmlDes>
        {html}
        <br />
        &nbsp; &nbsp; {body}
      </HtmlDes>
      <Main>
        <Title>
          <HtmlDes>{h1[0]} </HtmlDes>
          <div>Hi,</div>
          <div>
            I'm
            <K src={logo} />
            amron
          </div>
          <div>web developer</div>
          <HtmlDes>{h1[1]} </HtmlDes>
        </Title>
        <Title.Des>
          <HtmlDes>{p[0]} </HtmlDes>
          Front-End Developer
          <HtmlDes>{p[1]} </HtmlDes>
        </Title.Des>
        <Button />
      </Main>
    </Container>
    // </MainWrapper>
  );
};

export default Body;
