import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(props.movies);
  return (
    <div className='px-5 py-4 text-white'>
      <h1 className='text-3xl font-semibold pb-2'>{title}</h1>
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
