import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId, currentLang) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  const getMovieVideo = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    let data = await res.json();

    const filterData = data?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer =
      filterData?.length > 0 ? filterData?.[0] : data?.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!movieId && Object.keys(trailerVideo)?.length==0) return;
    getMovieVideo();
  }, [movieId]);
};

export default useVideoTrailer;
