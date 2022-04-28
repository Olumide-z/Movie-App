import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const PaginateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .page {
    border: 1px solid #603601;
    background-color: transparent;
    color: white;
    padding: 0.5rem;
    margin: 7px;

    &:hover {
      opacity: 0.7;
      transition: all 0.3s;
    }

    @media screen and (max-width: 600px) {
      margin: 5px;
      padding: 0.3rem;
      font-size: 0.8rem;
    }

    @media screen and (max-width: 400px) {
      margin: 3px;
      padding: 0.2rem;
      font-size: 0.7rem;
    }

    @media screen and (max-width: 325px) {
      margin: 2px;
    }
  }
`;
export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: space-between;
  width: 500px;
  list-style: none;
  cursor: pointer;
  align-items: center;

  .active {
    background-color: #603601;
    color: white;
  }
`;
