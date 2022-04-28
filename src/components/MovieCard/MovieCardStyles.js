import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillStarFill, BsFillBookmarkStarFill } from "react-icons/bs";

export const Container = styled.div`
  height: 450px;
  width: 237px;
  margin: 1rem 0.3rem 2rem 0.3rem;
  position: relative;

  @media screen and (max-width: 1335px) {
    width: 220px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    margin: 1rem 0.3rem 0rem 0.3rem;
  }

  @media screen and (max-width: 968px) {
    height: 400px;
    width: 170px;
  }

  @media screen and (max-width: 595px) {
    width: 150px;
    height: 370px;
  }

  @media screen and (max-width: 358px) {
    width: 120px;
    height: 300px;
  }
`;
export const Wrap = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s;
  }
`;
export const ImageWrapper = styled(Link)`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  background-color: #603601;
  transition: all 0.3s;
`;
export const WatchlistBtn = styled.button`
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  @media screen and (max-width: 968px) {
    font-size: 2rem;
  }
`;
export const Watchlist = styled(BsFillBookmarkStarFill)`
  opacity: 0.7;
  color: white;

  &:hover {
    opacity: 1;
  }
`;

export const MovieDetails = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  height: 40px;

  @media screen and (max-width: 1024px) {
    width: 200px;
  }

  @media screen and (max-width: 968px) {
    width: 170px;
  }

  @media screen and (max-width: 595px) {
    width: 150px;
  }

  @media screen and (max-width: 358px) {
    width: 120px;
  }
`;
export const MovieTitle = styled.h3`
  font-size: 1rem;
  width: 150px;

  @media screen and (max-width: 968px) {
    width: 120px;
  }

  @media screen and (max-width: 445px) {
    width: 100px;
    font-size: 0.8rem;
  }
`;
export const Date = styled.p`
  font-size: 0.7rem;

  @media screen and (max-width: 358px) {
    font-size: 0.6rem;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 8px 20px;
  font-size: 0.7rem;
  margin-top: 8px;
  font-weight: 600;
  color: white;
  border: 1px solid #603601;
  background: transparent;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;

  &:hover {
    background-color: #603601;
    transition: all 0.3s;
  }

  @media screen and (max-width: 358px) {
    font-size: 0.5rem;
  }
`;
export const BtnLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const Rating = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 445px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 595px) {
    display: flex;
    align-items: center;
  }
`;
export const Star = styled(BsFillStarFill)`
  margin-left: 5px;
  font-size: 0.9rem;
  color: #ffc300;
`;
