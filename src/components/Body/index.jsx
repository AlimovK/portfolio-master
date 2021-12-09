import React from "react";
import "animate.css";
import "./style.css";
import Button from "../Generic/button";
import logo from "../../assets/img/logo1.png";
import { Container, HtmlDes, K, Main, Title } from "./style";
import ScrollDonw from "../Generic/scrollDown";
import { Link } from "react-router-dom";

const Body = () => {
  const html = "<html>";
  const body = "<body>";
  const h1 = ["<h1>", "</h1>"];
  const p = ["<p>", "</p>"];
  return (
    <Container>
      <HtmlDes>
        {html}
        <br />
        &nbsp; &nbsp; {body}
      </HtmlDes>
      <Main>
        <Title>
          <HtmlDes>{h1[0]} </HtmlDes>
          <div className=" animate__rubberBand">Hi,</div>
          <div>
            I'm
            <K className="animate__animated animate__bounceInDown" src={logo} />
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
        <Link to="contact">
          <Button />
        </Link>
      </Main>
      <ScrollDonw />
    </Container>
  );
};

export default Body;
