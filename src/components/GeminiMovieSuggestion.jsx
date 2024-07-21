import React from 'react'
import { useSelector } from 'react-redux'
import { MOVIECARD_IMAGE_URL } from '../utils/constant';
import Shimmer from '../Helpers/Shimmer';

const GeminiMovieSuggestion = ( {loading} ) => {
  const movies = useSelector((store) => store.gemini?.geminiMovies);
  console.log(movies);

  if(movies === null) return;

  // Filter movies to exclude those without images
  const filteredMovies = movies.filter((movie) => (
    movie.poster_path !== null
  ));

  // Make a limitation for the length of description of movie.
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  if(filteredMovies === null) return;
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col overflow-y-scroll bg-black w-6/12 bg-opacity-80 rounded-2xl mt-3 hide-scrollbar' style={{ maxHeight: '53vh' }}>
        { loading ? (
            <Shimmer/>
          ) : 
          (filteredMovies.map((movie) => (
            <div className='flex justify-center items-center p-2 m-2' key={movie?.id}>
              <img src={MOVIECARD_IMAGE_URL + movie.poster_path} alt={movie.title} className='w-3/12 rounded-sm'/>
              <div className='flex flex-col ml-[6%]'>
                <h1 className='text-white text-xl font-semibold'>{movie.title}</h1>
                <p className='text-white mt-2'>{truncateText(movie.overview, 99)}</p>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  )
}

export default GeminiMovieSuggestion
