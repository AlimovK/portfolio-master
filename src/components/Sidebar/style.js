import styled from "styled-components";
import { ReactComponent as github } from "../../assets/icons/github.svg";
import { ReactComponent as gmail } from "../../assets/icons/gmail.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";

//hover #2ad0b7
//color #bdbdc5

export const Container = styled.div`
  width: 120px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #bdbdc5;
  background: #181818;
`;
export const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 120px;
  height: 150px;
  background: #000;
  color: white;
  cursor: pointer;
`;
export const Item = styled.div`
  line-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  margin-top: 150px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Github = styled(github)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover {
    fill: red;
  }
`;

export const Gmail = styled(gmail)`
  width: 20px;
  height: 20px;
  fill: #bdbdc5;
`;
export const Linkedin = styled(linkedin)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
