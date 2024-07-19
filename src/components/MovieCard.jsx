import React from 'react'
import { MOVIECARD_IMAGE_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
  // console.log(poster_path);
  return (
    <div className='w-44 pr-2'>
       <img src={MOVIECARD_IMAGE_URL + poster} alt="" />
    </div>
  )
}

export default MovieCard
