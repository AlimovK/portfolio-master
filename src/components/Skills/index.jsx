import React from 'react'
import { AboutTitle, Container, Des, Frontend, LeftContainer, Line, RightContainer } from "./style";
import { HtmlDes } from "../Body/style";



const Skills = () => {
    const h2 = ["<h2>", "</h2>"];
    const p = ["<p>", "</p>"];
    return (
        <Container>

        <LeftContainer>
      <AboutTitle>
        <HtmlDes>{h2[0]}</HtmlDes>
        Skills &  Experience<HtmlDes>{h2[1]}</HtmlDes>
      </AboutTitle>
      <Des>
        <HtmlDes>{p[0]}</HtmlDes>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facere. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facere. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
        <br /> <br />    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, facere. Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
        
        <br /> <br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit voluptatem fugiat quisquam excepturi totam dolorem magni, qui dignissimos nemo.
        <HtmlDes>{p[1]}</HtmlDes>
      </Des>
    </LeftContainer>

    <RightContainer>
        <Frontend>Frontend</Frontend>
        <Line/>
    </RightContainer>
        </Container>
    )
}

export default Skills
