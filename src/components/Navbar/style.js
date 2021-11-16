import styled from "styled-components";
import { ReactComponent as left } from "../../assets/icons/left.svg";
import { ReactComponent as right } from "../../assets/icons/right.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: transparent;
  border: 1px solid red;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const Title = styled.div``;
export const Left = styled(left)`
  width: 18px;
  height: 18px;
`;
export const Right = styled(right)`
  width: 18px;
  height: 18px;
`;
Wrapper.Item = styled.div`
  min-width: 700px;
  display: flex;
  align-items: center;
  margin-left: auto;
  justify-content: space-around;
  @media (max-width: 868px) {
    display: none;
  }
`;
export const Item = styled.div`
  cursor: pointer;
  font-size: 20px;
  padding: 15px;
  transition: all 0.2s;
  :hover {
    background: #7cd0f3;
  }
`;
