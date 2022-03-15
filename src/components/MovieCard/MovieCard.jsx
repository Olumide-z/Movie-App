import React from 'react'


import { Container, Wishlist, ImageWrapper, Image, Star, MovieDetails, MovieTitle, Date, Button, Rating } from './MovieCardStyles'

const MovieCard = ({ release_date, title, poster_path, vote_average, name }) => {
  return (
      <Container>
        <ImageWrapper to='/'>
          <Image 
            src={
              `https://image.tmdb.org/t/p/original${poster_path}`} 
              alt={title} 
          />
          <Wishlist />
        </ImageWrapper>
        <MovieDetails>
          <MovieTitle>
            { (title || name) && 
              ((title || name).length <=20 ? (title || name ) : `${(title || name).slice(0, 20)}...`)
            }
          </MovieTitle>
          <Rating>{vote_average}<Star /></Rating>
        </MovieDetails>
        <Date>Released: {release_date || 'Coming Soon'}</Date>
        <Button>More Details</Button>
      </Container>
  )
}

export default MovieCard