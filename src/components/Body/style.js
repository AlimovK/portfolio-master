import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: white;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  min-width: 300px;
  width: 100%;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  margin-bottom: 9rem;
  @media (max-width: 600px) {
    padding-left: 1rem;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-size: 80px;
  font-weight: 900;
  @media (max-width: 1000px) {
    font-size: 60px;
  }
  @media (max-width: 600px) {
    font-size: 50px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;
export const HtmlDes = styled.div`
  margin-bottom: auto;
  display: flex;
  font-size: 18px;
  font-family: "Caveat", cursive;
  color: #4f4f4f;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

Title.Des = styled.div`
  letter-spacing: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #bdbdc5;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
export const K = styled.img`
  width: 70px;
  height: 76px;
  margin-left: 50px;
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
    margin-left: 17px;
  }
`;
