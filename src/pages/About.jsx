import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading/Heading";

const About = () => {
  return (
    <Container>
      <Heading title={"About MovieLand"} />
      <Details>
        MovieWorld provides you with all movies updates, which includes
        trending, top rated, and new movies and tv shows. The app allows you to
        add movies to your watchlist in order to save movies or tv shows to
        watch later and provides relevant details about each movie and tv shows.
        Lastly, you can also watch movies trailer on the app.
      </Details>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 50px 0 50px;
  min-height: 100vh;

  @media screen and (max-width: 300px) {
    width: 300px;
  }
`;
const Details = styled.p`
  padding: 2rem 0;
  line-height: 2.5;
  font-size: 1.5rem;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    padding: 1rem 0;
  }
`;

export default About;
