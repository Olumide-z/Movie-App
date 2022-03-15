import React from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieCardList/MovieList';
import Search from '../components/Search/Search';


const SearchPage = () => {
  return (
    <Container>
      <Search />
      <Heading>Search Results</Heading>
      <MovieList />
    </Container>
  )
}

const Container = styled.div`
  padding: 100px 50px 0 50px;
`
const Heading = styled.h1`
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1.5px solid #603601;
`



export default SearchPage;