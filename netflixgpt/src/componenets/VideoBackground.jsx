import React, { useEffect } from 'react'
import { addTrailerVideo } from '../store/movieSlice';
import { useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';

const VideoBackground = ({movieId}) => {
const trailerVideo = useSelector((store)=> store.movie.trailerVideo)
     const getMovieVideo = async () => {
       let res = await fetch(
         'https://api.themoviedb.org/3/movie/976573/videos?language=en-US',
         API_OPTIONS
       );
         let data = await res.json();
     

         const filterData = data?.results?.filter((video) => video?.type === "Trailer")
         const trailer = filterData?.length>0 ? filterData?.[0] : data?.results?.[0]
    
       dispatch(addTrailerVideo(trailer));
       console.log(trailer,"trailer")
     };
    
     useEffect(() => {
       getMovieVideo();
     }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default VideoBackground
