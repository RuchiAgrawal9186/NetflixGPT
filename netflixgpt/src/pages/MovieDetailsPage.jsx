import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const getTrailer = async () => {
    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
      let data = await res.json();
      const filterData = data?.results?.filter(
        (video) => video?.type === "Trailer" &&  video.site === "YouTube"
      );
      const trailer =
        filterData?.length > 0 ? filterData?.[0] : data?.results?.[0];

      setTrailer(trailer);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
    };
    
    const getTrailerDetails = async () => {
      try {
        let res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          API_OPTIONS
        );
        let data = await res.json();
        setMovie(data);
        
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

  useEffect(() => {
    if (id) {
        getTrailer();
        getTrailerDetails()
    }
  }, [id]);

  if (!movie) return <div className="text-white p-10">Loading...</div>;
  return (
    <div className="bg-black min-h-screen text-white pt-[80px] flex flex-col items-center w-full">
      {/* Trailer Video Section */}
      {trailer && (
        <div className="w-full max-w-7xl px-1 md:px-1 mt-4">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full aspect-video"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&controls=1`}
              title={trailer.name}
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Movie Details */}
      <div className="w-full max-w-7xl px-1 md:px-8 mt-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {movie.title}
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
          {movie.overview}
        </p>

        <div className="text-gray-400 text-sm sm:text-base space-y-1">
          <p>
            <span className="font-semibold text-gray-200">Release Date:</span>{" "}
            {movie.release_date}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Rating:</span> ⭐{" "}
            {movie.vote_average}
          </p>
          <p>
            <span className="font-semibold text-gray-200">Status:</span>{" "}
            {movie.status}
          </p>
          {movie.tagline && (
            <p>
              <span className="font-semibold text-gray-200">Tagline:</span> “
              {movie.tagline}”
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition">
            + Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
