import React, {useState, useEffect} from 'react'
import Iframe from 'react-iframe';
import axios from 'axios';
import { useGlobalContext } from '../../context';

import { VideoContainer, Button, Watchlist} from './VideoStyles';

const MOVIE_VIDEO_URL = `https://api.themoviedb.org/3/movie/`;
const TV_VIDEO_URL = `https://api.themoviedb.org/3/tv/`;

const Video = ( { id, content}) => {
const {addToWatchlist, watchlist} = useGlobalContext();
const [video, setVideo] = useState();

    // fetch Video
const fetchVideos = async() => {
    const { data } = await axios.get(`${MOVIE_VIDEO_URL}${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    // console.log(data.results[0].key)
    setVideo(data.results[0])
  }
  
  useEffect(() => {
      fetchVideos();
  }, [id])

const fetchVideosTv = async() => {
    const { data } = await axios.get(`${TV_VIDEO_URL}${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    console.log(data.results[0].key)
    setVideo(data.results[0])
}
  
  useEffect(() => {
      fetchVideosTv();
  }, [id])
  
  return (
    <VideoContainer>
    {video && <Iframe 
      url={`http://www.youtube.com/embed/${video.key}`}
      id={video.id}
      className="iframe"
      display="initial"
      position="relative"
      allowFullScreen
    />
    }
      <Button
        onClick={() => addToWatchlist(content)}
        >
       <Watchlist/> Add to watchlist
      </Button>
    </VideoContainer>
  )
}

export default Video