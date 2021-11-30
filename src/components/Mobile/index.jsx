import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Hamburger from "../Generic/hamburger";
import { Container } from "./style";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      {show === true && <ToggleMenu />}
      <div onClick={() => setShow(!show)}>
        <Hamburger />
      </div>
    </Container>
  );
};

export default Sidebar;
