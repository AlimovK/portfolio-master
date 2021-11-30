import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as github } from "../../../assets/icons/github.svg";

export const Container = styled.div`
  display: none;
  @media (max-width: 1300px) {
    position: absolute;
    max-width: 1300px;
    width: 100%;
    min-width: 200px;
    align-items: center;
    justify-content: space-between;
    max-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #bdbdc5;
    background: #181818;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: #000;
  :hover {
    color: #bdbdc5;
  }
`;
export const Logo = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
`;
export const Des = styled.div`
  display: flex;
  color: #bdbdc5;
  text-decoration: red;
  font-size: 12px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Item = styled(Link)`
  text-decoration: none;
  font-weight: 500;
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
  margin-bottom: 50px;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    width: 30%;
  }
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
