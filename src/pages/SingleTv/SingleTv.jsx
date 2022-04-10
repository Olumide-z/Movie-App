import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loading2 from '../../components/AnimatedLoading/Loading2';
import Video from '../../components/VideoComponent/Video';

const URL = `https://api.themoviedb.org/3/tv/`

const SingleTv = () => {
    const {id} = useParams();
    const {loading2, setLoading2} = useGlobalContext();
    const [content, setContent] = useState()

    const fetchTv = async () => {
        setLoading2(true)
        const { data } = await axios.get(`${URL}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        console.log(data);
        setContent(data)
        setLoading2(false)
    }

    useEffect(() => {
        fetchTv();
    }, [id]);

    if(loading2){
        return <Loading2 />
    }

   
  return (
    <>
    <MovieDetails content={content}/>
    <Video id={id} />
    </>
  )
}

export default SingleTv