import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie)
  console.log(movies);
  return (
    <div className='bg-black '>
      <div className='relative z-10 md:-mt-20 -mt-8 md:pl-8 pl-4'>
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies}/>
        <MovieList title="Top Rated" movies={movies?.topRatedMovies}/>
        <MovieList title="Popular" movies={movies?.popularMovies}/>
        <MovieList title="Up Coming" movies={movies?.upcomingMovies}/>
        <MovieList title="TV Shows" movies={movies?.tvShows}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
