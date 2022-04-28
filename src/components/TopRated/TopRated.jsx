import React, { useEffect, useState } from "react";
import { TrendingContainer } from "../Trending/TrendingStyles";
import { useGlobalContext } from "../../context";
import axios from "axios";
import Loading from "../SkeletonLoading/Loading";
import { MovieContainer } from "../Trending/TrendingStyles";
import MovieCard from "../MovieCard/MovieCard";
import Pagination from "../Pagination/Pagination";

const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

const TopRated = () => {
  const { loading, setLoading } = useGlobalContext();
  const [content, setContent] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchTopRated = async (currentPage) => {
    const { data } = await axios.get(`${URL}&page=${currentPage}`);
    return data.results;
  };

  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let currentPage = data.selected + 1;
    const server = await fetchTopRated(currentPage);
    setContent(server);
    window.scroll(0, 0);
  };

  const getTopRated = async () => {
    setLoading(true);
    const { data } = await axios.get(`${URL}&page=1`);
    let totalPages = data.total_pages;
    setPageCount(totalPages);
    setContent(data.results);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getTopRated();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <TrendingContainer>
      <MovieContainer>
        {content &&
          content.map((item) => {
            const { id } = item;
            return <MovieCard key={id} {...item} />;
          })}
      </MovieContainer>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </TrendingContainer>
  );
};

export default TopRated;
