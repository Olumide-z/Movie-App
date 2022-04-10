import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';
import Loading from '../SkeletonLoading/Loading';
import { TrendingContainer, MovieContainer } from './TrendingStyles';

const URL =`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
const Trending = () => {
    const [items, setItems] = useState([]);
    const { loading, setLoading } = useGlobalContext();
    const [pageCount, setPageCount] = useState(0)

    const fetchTrending = async (currentPage) =>{
        const { data } = await axios.get(`${URL}&page=${currentPage}`);
        return data.results;
    }
    
    
  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    const trendingServer = await fetchTrending(currentPage)
    setItems(trendingServer);
    window.scroll(0,0)
  };

    const getTrending = async () => {
        setLoading(true);
        const { data } = await axios.get(`${URL}&page=1`);
        let totalPages = data.total_pages;
        // console.log(totalPages);
        setPageCount(totalPages);
        setItems(data.results);
        // console.log(data.results)
        setLoading(false);
    };

    useEffect(() =>{
        getTrending();
    }, []);

    if(loading){
        return <Loading />
    };

  return (
    <TrendingContainer>
        <MovieContainer>
        { items && items.map((item) => {
                const {id} = item;
                return <MovieCard key={id} {...item}/>
            })
        }
        </MovieContainer>
        <Pagination 
            pageCount={pageCount}
            handlePageClick={handlePageClick}
        />
    </TrendingContainer>
  )
}

export default Trending