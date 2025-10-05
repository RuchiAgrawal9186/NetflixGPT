import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_OBJ } from "../utils/constant";
import openai from "../utils/openai";
import { searchMovies } from "../utils/gemeni";
import useSearchMovies from "../hooks/getMovieData";
import { handleMovieName, handleMovieResult } from "../store/gptSlice";
import getMovieData from "../hooks/getMovieData";

const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");
  const currentLang = useSelector((store) => store.language.currentLang);
  const lang = LANGUAGE_OBJ[currentLang];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await searchMovies(query);
    dispatch(handleMovieName(res));

    const promiseArray = res?.map((el) =>
      // 💡 Fix: Call the regular async function, not a Hook
      getMovieData(dispatch, currentLang, el)
    );

    // Wait for all TMDB API calls to complete if needed
    const searchMoviesResults =  await Promise.all(promiseArray);
    
    dispatch(handleMovieResult(searchMoviesResults));
  };
  return (
    // <div className="flex w-1/2  mt-30">
    //   <input
    //     type="text"
    //     value={query}
    //     onChange={(e) => setQuery(e.target.value)}
    //     placeholder={lang?.searchPlaceholder}
    //     className="w-full flex-grow px-6 py-4 text-lg rounded-l-md bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"
    //   />
    //   <button
    //     onClick={handleSearch}
    //     className="bg-red-600 px-8 py-4 text-lg rounded-r-md font-bold text-white hover:bg-red-500"
    //   >
    //     {lang?.searchBtn}
    //   </button>
    // </div>
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl flex flex-col sm:flex-row items-center justify-center mt-8 sm:mt-10 md:mt-16 gap-3 sm:gap-0 px-4"
    >
      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={lang?.searchPlaceholder}
        className="w-full sm:flex-grow px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-md sm:rounded-l-md bg-white text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Button */}
      <button
        type="submit"
        className="w-1xl  cursor-pointer sm:w-auto bg-red-600 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-md  font-bold text-white hover:bg-red-500 transition"
      >
        {lang?.searchBtn}
      </button>
    </form>
  );
};

export default GPTSearchBar;
