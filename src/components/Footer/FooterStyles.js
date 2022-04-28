import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  z-index: 1;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #603601;

  @media screen and (max-width: 968px) {
    padding: 3rem;
  }

  @media screen and (max-width: 395px) {
    padding: 2rem;
  }

  @media screen and (max-width: 300px) {
    width: 300px;
  }
`;
export const Header = styled.h1`
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (max-width: 968px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 1rem;
    letter-spacing: 0px;
  }
`;
export const Details = styled.div`
  font-size: 0.9rem;
  margin-top: 15px;
  display: flex;

  @media screen and (max-width: 968px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 395px) {
    font-size: 0.7rem;
    flex-direction: column;
  }
`;
export const Text = styled.p`
  padding-right: 3px;
`;
export const GitLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
`;
export const GitIcon = styled(FaGithub)`
  padding-right: 5px;
  font-size: 1.2rem;
`;
