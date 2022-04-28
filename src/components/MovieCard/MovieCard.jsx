import moment from 'moment';
import React from 'react'
import { useGlobalContext } from '../../context'

import {
   Container, WatchlistBtn, Watchlist, BtnLink, 
   ImageWrapper, Image, Star, MovieDetails,
   MovieTitle, Date, Button, Rating, Wrap 
  } from './MovieCardStyles'

const MovieCard = (singleMovie) => {
  const {addToWatchlist, watchlist } = useGlobalContext();

  // let storedMovie = watchlist.find(o => o.id === singleMovie.id);
  // const watchlistDisable = storedMovie ? true : false
  
  return (
      <Container>
        <Wrap>
        <WatchlistBtn  
          // disabled={watchlistDisable}
          onClick={() => addToWatchlist(singleMovie)}
        >
          <Watchlist/>
        </WatchlistBtn>
        <ImageWrapper to={singleMovie.media_type === 'movie' ? `/movie/${singleMovie.id}` : singleMovie.media_type === 'tv' ? `/tv/${singleMovie.id}` : `/movie/${singleMovie.id}`}>
          <Image 
            src={
              `https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} 
              alt={singleMovie.title} 
          />
        </ImageWrapper>
        </Wrap>
        <MovieDetails>
          <MovieTitle>
            { (singleMovie.title || singleMovie.name) && 
              ((singleMovie.title || singleMovie.name).length <=20 ? (singleMovie.title || singleMovie.name ) : `${(singleMovie.title || singleMovie.name).slice(0, 20)}...`)
            }
          </MovieTitle>
          <Rating>{singleMovie.vote_average}<Star /></Rating>
        </MovieDetails>
        <Date>Released: {moment(singleMovie.release_date || singleMovie.first_air_date).format('ll')}</Date>
          <BtnLink to={singleMovie.media_type === 'movie' ? `/movie/${singleMovie.id}` : singleMovie.media_type === 'tv' ? `/tv/${singleMovie.id}` : `/movie/${singleMovie.id}`}>
            <Button>More Details</Button>
          </BtnLink>
      </Container>
  )
}

export default MovieCard