import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondoryContainer = () => {
  const { nowPlayingMovies, populerMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movie);

  const movieListArray = [
    {
      id: 1,
      title: "Now Playing Movies",
      data: nowPlayingMovies,
    },
    {
      id: 2,
      title: "Populer Movies",
      data: populerMovies,
    },
    {
      id: 3,
      title: "Top Rated Movies",
      data: topRatedMovies,
    },
    {
      id: 4,
      title: "Upcoming Movies",
      data: upcomingMovies,
    },
  ];
  return (
    <div className="bg-black">
      {movieListArray?.map((list) => (
        <MovieList key={list.id} title={list.title} movies={list.data} />
      ))}
    </div>
  );
}

export default SecondoryContainer
