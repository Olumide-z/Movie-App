import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <Container>
      <h1>Oops!! 404 ERROR!!!</h1>
      <p>Invalid Url, Click the button to go back to the website's home page</p>
      <button>
        <Link to="/">Home Page</Link>
      </button>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 50px 0 50px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 390px) {
    width: 300px;
  }
`;

export default Error;
