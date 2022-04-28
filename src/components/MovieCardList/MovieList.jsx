import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../SkeletonLoading/Loading";

const MovieList = () => {
  const { movie, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <MovieContainer>
      {movie.map((singleMovie) => {
        const {
          id,
          release_date,
          title,
          poster_path,
          vote_average,
          name,
          media_type,
        } = singleMovie;
        return <MovieCard key={id} {...singleMovie} />;
      })}
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;

  @media (max-width: 440px) {
    justify-content: space-between;
  }
`;

export default MovieList;
