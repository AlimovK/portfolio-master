import styled from "styled-components";

//hover #2ad0b7
//color #bdbdc5

export const Container = styled.div`
  display: flex;
  color: #bdbdc5;
  align-items:center;
  padding-left: 3rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
export const AboutTitle = styled.div`
  font-size: 90px;
  font-weight: 900;
  color: #2ad0b7;
  font-family: "Caveat", cursive;
  @media (max-width: 580px) {
    font-size: 60px;
  }
  @media (max-width: 380px) {
    font-size: 40px;
  }
`;
export const Des = styled.div`
  letter-spacing: 2px;
  width: 850px;
  font-size: 17px;
  @media (max-width: 580px) {
    width: 400px;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
  @media (max-width: 380px) {
    font-size: 13px;
  }
  @media (max-width: 350px) {
    width: 200px;
  }
`;


export const RightContainer = styled.div`
margin-left:50px`;

export const Frontend = styled.div`
font-weight:bold;
`;

export const Line =styled.div`
width:400px;
height:2px;
background:#5e5e5e;
`

export const React = styled.div`
width:95px;
height:2px;
background:green;
`