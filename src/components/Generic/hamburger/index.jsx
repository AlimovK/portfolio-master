import React, { useState } from "react";
import { Container } from "./style";
import "./style.css";

const Hamburger = () => {
  const [state, setState] = useState(false);
  return (
    <Container>
      <div
        onClick={() => setState(!state)}
        className={state ? "toggle active " : "toggle"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
};

export default Hamburger;
