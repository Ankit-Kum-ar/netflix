import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie)
  // console.log(movies);
  return (
    <div className='bg-black '>
      <div className='relative z-10 md:-mt-20 -mt-8 md:pl-8 pl-4'>
        <MovieList title="Now Playing Movies" movies={movies?.nowPlayingMovies}/>
        <MovieList title="Trending Movies" movies={movies?.popularMovies}/>
        <MovieList title="Up Coming Movies" movies={movies?.upcomingMovies}/>
        <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies}/>
        <MovieList title="TV Shows" movies={movies?.tvShows}/>
        <MovieList title="Trending Shows" movies={movies?.popularShows}/>
        <MovieList title="Top Rated Shows" movies={movies?.topRatedShows}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
