import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(props.movies);
  return (
    <div className='md:px-5 px-1 md:py-4 py-[11px] text-white'>
      <h1 className='md:text-3xl text-sm md:font-semibold font-medium pb-2'>{title}</h1>
      <div className='flex overflow-x-scroll hide-scrollbar'>
        <div className='flex'>
          {
            movies?.map((movie) => (
              <MovieCard poster={movie?.poster_path} key={movie?.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList
