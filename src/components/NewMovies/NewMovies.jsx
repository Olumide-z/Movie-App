import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TrendingContainer } from '../Trending/TrendingStyles';
import Loading from '../SkeletonLoading/Loading';
import { MovieContainer } from '../Trending/TrendingStyles';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
import { useGlobalContext } from '../../context';


const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

const NewMovies = () => {
        const { loading, setLoading } = useGlobalContext();
        const [content, setContent] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        
        const fetchUpcoming = async(currentPage) => {
          const { data } = await axios.get(`${URL}&page=${currentPage}`)
          return data.results;
        }
      
        const handlePageClick = async (data) => {
          // console.log(data.selected);
          let currentPage = data.selected + 1;
          const server = await fetchUpcoming(currentPage)
          setContent(server);
          window.scroll(0, 0)
        };
      
        const getUpcoming = async() => {
          setLoading(true);
          const {data} = await axios.get(`${URL}&page=1`);
          let totalPages = data.total_pages;
          setPageCount(totalPages)
          setContent(data.results);
          setLoading(false)
          console.log(data);
        }
      
        useEffect(() => {
          getUpcoming()
        }, []);
      
        if(loading){
          return <Loading />
        }
      
  return (
    <TrendingContainer>
      <MovieContainer>
        { content && content.map((item) =>{
          const {id} = item;
          return <MovieCard key={id} {...item} />
        })}
      </MovieContainer>
      <Pagination 
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </TrendingContainer>
  )
}

export default NewMovies