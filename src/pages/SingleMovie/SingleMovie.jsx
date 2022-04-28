import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading2 from "../../components/AnimatedLoading/Loading2";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Video from "../../components/VideoComponent/Video";
import { useGlobalContext } from "../../context";

const URL = `https://api.themoviedb.org/3/movie/`;

const SingleMovie = () => {
  const { loading2, setLoading2 } = useGlobalContext();
  const [content, setContent] = useState();
  const { id } = useParams();

  const fetchMovie = async () => {
    setLoading2(true);
    try {
      const response = await fetch(
        `${URL}${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      // console.log(data);
      setContent(data);
      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (loading2) {
    return <Loading2 />;
  }

  return (
    <>
      <MovieDetails content={content} />
      <Video id={id} content={content} />
    </>
  );
};

export default SingleMovie;
