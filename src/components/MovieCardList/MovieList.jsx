import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
    const {movie} = useGlobalContext();
  return (
    <MovieContainer>
    {
      movie.map((singleMovie) => {
        const {id, release_date, title, poster_path, vote_average, name} = singleMovie;
        return (
          <MovieCard key={id} {...singleMovie}/>
        )
      })
    }
    </MovieContainer>
  )
}

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`

export default MovieList