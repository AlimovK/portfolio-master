import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as github } from "../../assets/icons/github.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";

//hover #2ad0b7
//color #bdbdc5

export const Container = styled.div`
  position: relative;
  width: 120px;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #bdbdc5;
  background: #181818;
  @media (max-width: 1300px) {
    display: none;
  }
`;
export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 150px;
  background: #000;
  color: #bdbdc5;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: #bdbdc5;
  }
`;
export const Logo = styled.img`
  width: 120px;
  height: 120px;
`;
export const Des = styled.div`
  display: flex;
  text-align: center;
  font-size: 12px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Item = styled(Link)`
  text-decoration: none;
  color: #bdbdc5;
  line-height: 50px;
  font-family: "Outfit", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    color: #2ad0b7;
  }
`;
export const Line = styled.div`
  border-bottom: 1px solid #333333;
  width: 100%;
  background: #fff;
`;
export const IconWrapper = styled.div`
  margin-bottom: 150px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Github = styled(github)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  :hover path {
    fill: #2ad0b7;
  }
`;
export const Linkedin = styled(linkedin)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover rect {
    fill: #2ad0b7;
  }
  :hover circle {
    fill: #2ad0b7;
  }
  :hover path {
    fill: #2ad0b7;
  }
`;
