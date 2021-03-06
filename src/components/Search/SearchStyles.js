import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Input = styled.input`
  width: 80%;
  padding: 0.8rem;
  font-size: 1.2rem;
  outline: none;
  transition: all 0.3s;
  border: none;
  border-radius: 5px 0 0px 5px;

  &:focus {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 440px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;
export const Button = styled.button`
  padding: 1.06rem;
  background: #603601;
  outline: none;
  border: none;
  width: 100px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 70px;
  }

  @media screen and (max-width: 440px) {
    padding: 0.54rem;
  }
`;
