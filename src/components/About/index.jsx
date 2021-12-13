import React from "react";
import { HtmlDes } from "../Body/style";
import { AboutTitle, Container, Des } from "./style";

const About = () => {
  const h2 = ["<h2>", "</h2>"];
  const p = ["<p>", "</p>"];
  return (
    <Container>
      <AboutTitle>
        <HtmlDes>{h2[0]}</HtmlDes>
        My, Myself & I<HtmlDes>{h2[1]}</HtmlDes>
      </AboutTitle>
      <Des>
        <HtmlDes>{p[0]}</HtmlDes>
        Hello. My name is Kamron Alimov. <br />
        I'm front-end developer located in Uzbekistan.
        <br /> <br /> I enjoy creating things that live on the internet. My
        interest in web development started back in 2020
        <br /> <br />
        Interested in the entire frontend spectrum and and working ambitious
        projects positive people.
        <HtmlDes>{p[1]}</HtmlDes>
      </Des>
    </Container>
  );
};

export default About;
