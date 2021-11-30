import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../pages/Body";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./style";
import Mobile from "../components/Mobile";

const Root = () => {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Mobile />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default Root;
