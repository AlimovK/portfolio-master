import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding-left: 100px;
  color: white;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  border: 1px solid red;
  min-width: 300px;
  width: 100%;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-size: 80px;
  font-weight: 900;
`;
Title.des = styled.div`
  display: flex;
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
