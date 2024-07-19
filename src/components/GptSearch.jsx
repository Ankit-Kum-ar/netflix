import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptBar from './GptBar'
import { bgImage } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className='bg-cover w-screen h-screen bg-repeat-y' style={{backgroundImage: `url(${bgImage})`}}>
      {/* It consist of two components that are gptSearchBar and gptMovieSuggestion */}
      <GptBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
