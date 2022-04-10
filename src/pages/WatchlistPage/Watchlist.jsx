import { Link } from 'react-router-dom';
import Heading from '../../components/Heading/Heading'
import { useGlobalContext } from '../../context';
import moment from 'moment';

import { 
  Container, Wrapper, ImageContainer, Image, Title, Date, Button, 
  WatchlistContainer, DeleteIcon
} from './WatchlistStyles';


const Watchlist = () => {
  const {watchlist, removeWatchlist} = useGlobalContext();
  console.log(watchlist)
  return (
    <Container>
      <Heading title={'Watchlist'} />
      {watchlist && <WatchlistContainer>
      {
        watchlist.map((movie) => (
          <>
          <Wrapper>
            <Link to={movie.media_type === 'movie' ? `/movie/${movie.id}` : movie.media_type === 'tv' ? `/tv/${movie.id}` : `/movie/${movie.id}`}>            <ImageContainer>
              <Image 
                 src={
                  `https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                  alt={movie.title || movie.name}
              />
            </ImageContainer>
            </Link>
            <Title>
              { (movie.title || movie.name) && 
                ((movie.title || movie.name).length <=20 ? (movie.title || movie.name ) : `${(movie.title || movie.name).slice(0, 22)}...`)
              }
            </Title>
            <Date>Released: {moment(movie.release_date || movie.first_air_date).format('ll')}</Date>
            <Button onClick={() => removeWatchlist(movie)}>
              <DeleteIcon />
            </Button>
          </Wrapper>
          </>
        ))
      }
      </WatchlistContainer>}
    </Container>
  )
}




export default Watchlist