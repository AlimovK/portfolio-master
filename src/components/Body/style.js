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
  margin-bottom: 13rem;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-size: 80px;
  font-weight: 900;
`;
export const HtmlDes = styled.div`
  margin-bottom: auto;
  display: flex;
  font-size: 18px;
  font-family: "Caveat", cursive;
  color: #4f4f4f;
`;

Title.Des = styled.div`
  /* display: flex; */
  letter-spacing: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #bdbdc5;
`;
export const K = styled.img`
  width: 70px;
  height: 76px;
  margin-left: 50px;
`;
