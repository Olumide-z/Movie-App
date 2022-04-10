import axios from 'axios';
import moment from 'moment';
import React, {useState, useEffect} from 'react'
import Loading2 from '../../components/AnimatedLoading/Loading2';
import MovieCard from '../../components/MovieCard/MovieCard'
import { Wrapper } from '../../components/MovieDetails/MovieDetailsStyles';
import { MovieContainer } from '../../components/Trending/TrendingStyles';
import { useGlobalContext } from '../../context';

// import { MovieDetails, MovieTitle, Rating } from '../../components/MovieCard/MovieCardStyles';
import { 
  HomeContainer, Container,ImageWrapper, Image, WatchlistBtn, Watchlist, WatchlistBtn2, Watchlist2,
  MovieDetails, MovieInfo, MovieTitle, Date, Button, BtnLink, Rating, Star,
  NewMovie, NewMovieDetails, LargeImgContainer, ImageLarge, MovieHeader,
  SmallImageContainer, SmallImage, HeadingContainer, Article, Info2,
  Arrow, Header, ContainerDetails, DetailWrapper, Rating1, Wrap, Wrap2
} from './HomeStyles';


const URL =`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
const URL2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const Home = (item) => {
  const [items, setItems] = useState([]);
  const [content, setContent] = useState([]);
  const [main, setMain] = useState([]);
  const {loading2, setLoading2, addToWatchlist, watchlist} = useGlobalContext();
  
  let storedMovie = watchlist.find(o => o.id === item.id);
  const watchlistDisable = storedMovie ? true : false
  
  const getTrending = async() => {
    setLoading2(true)
    const { data } = await axios.get(`${URL}&page=1`);
    const slicedTrending = (data.results).slice(0, 15);
    setItems(slicedTrending)
    setLoading2(false)
    // console.log(slicedTrending)
  }

  
  const getUpcoming = async() => {
    setLoading2(true)
    const {data} = await axios.get(`${URL2}&page=1`);
    const slicedMain = (data.results).slice(0, 1);
    const slicedUpcoming = (data.results).slice(1, 4);
    setContent(slicedUpcoming);
    setMain(slicedMain);
    // console.log(slicedUpcoming)
    setLoading2(false)
    
  }

  useEffect(() => {
    getUpcoming()
  }, []);

  useEffect(() =>{
    getTrending();
  }, []);

  if(loading2){
    return <Loading2 />
  }

  return (
    <HomeContainer>
      <NewMovie>
        {main && main.map((item) => (
        <NewMovieDetails>
          <Wrapper>
          <LargeImgContainer>
            <ImageLarge src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} /> 
            <div className='div'></div>
          </LargeImgContainer>
          <DetailWrapper>
            <WatchlistBtn2
              disabled={watchlistDisable}
              onClick={() => addToWatchlist(item)}
            >
              <Watchlist2/>
            </WatchlistBtn2>
            <SmallImageContainer to={`/movie/${item.id}`}>
              <SmallImage src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
            </SmallImageContainer>
            <MovieInfo>
              <Wrap>
               <h1>{item.title}</h1>
               <Rating1>{item.vote_average}<Star /></Rating1>
              </Wrap>
              <Wrap2>
                  <p>{`${(item.overview).slice(0, 250)}...`}</p>
                  <Date>Released:{moment(item.release_date).format('ll')}</Date>
                  <button>MORE DETAILS</button>
              </Wrap2>
            </MovieInfo>
          </DetailWrapper>
          <Info2>
              <Wrap>
               <h1>{item.title}</h1>
               <Rating1>{item.vote_average}<Star /></Rating1>
              </Wrap>
              <Wrap2>
                  <p>{`${(item.overview).slice(0, 250)}...`}</p>
                  <Date>Released: {moment(item.release_date).format('ll')}</Date>
                  <button>MORE DETAILS</button>
              </Wrap2>
            </Info2>
          </Wrapper>
        </NewMovieDetails>
        ))
        }
        <Article>
        <MovieHeader>New Movies <Arrow /></MovieHeader>
          { content && content.map((item) => {
              const {id, poster_path, title, vote_average, release_date} = item;
              return (
                <Container>
                  <WatchlistBtn
                    disabled={watchlistDisable}
                    onClick={() => addToWatchlist(item)}
                  >
                      <Watchlist/>
                  </WatchlistBtn>
                  <ImageWrapper to={`/movie/${id}`}>
                    <Image 
                      src={
                        `https://image.tmdb.org/t/p/original${poster_path}`} 
                        alt={title} 
                    />
                  </ImageWrapper>
                  <ContainerDetails>
                  <MovieDetails>
                    <MovieTitle>
                      { (title) && 
                        ((title).length <=20 ? (title) : `${(title).slice(0, 20)}...`)
                      }
                    </MovieTitle>
                    <Rating>{vote_average}<Star /></Rating>
                  </MovieDetails>
                  <Date>Released: {release_date}</Date>
                    <BtnLink to={`/movie/${id}`}>
                      <Button>More Details</Button>
                    </BtnLink>
                  </ContainerDetails>
                </Container>
              )
          })}
        </Article>
      </NewMovie>
      <HeadingContainer to='/trending'>
        <Header>Trending <Arrow /></Header>
      </HeadingContainer>
      <MovieContainer>
        { items && items.map((item) => {
                const {id} = item;
                return <MovieCard key={id} {...item}/>
            })
        }
        </MovieContainer>
    </HomeContainer>
  )
}

export default Home