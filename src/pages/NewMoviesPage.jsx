import styled from "styled-components";
import Heading from "../components/Heading/Heading";
import NewMovies from "../components/NewMovies/NewMovies";

const NewMoviesPage = () => {
  return (
    <Container>
      <Heading title={"New Movies"} />
      <NewMovies />
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 50px 0 50px;
  min-height: 100vh;

  @media screen and (max-width: 650px) {
    padding: 100px 30px 0 30px;
  }

  @media screen and (max-width: 550px) {
    padding: 100px 50px 0 50px;
  }

  @media screen and (max-width: 445px) {
    padding: 100px 20px 0 20px;
  }

  @media screen and (max-width: 300px) {
    width: 300px;
  }
`;

export default NewMoviesPage;
