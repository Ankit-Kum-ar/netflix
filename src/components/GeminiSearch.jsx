import React from 'react'
import { bgImage } from '../utils/constant'
import GeminiBar from './GeminiBar'
import GeminiMovieSuggestion from './GeminiMovieSuggestion'

const GeminiSearch = () => {
  return (
    <div className='bg-cover w-screen h-screen bg-repeat-y' style={{backgroundImage: `url(${bgImage})`}}>
        {/* It consist of two components that are geminiSearchBar and geminiMovieSuggestion */}
        <GeminiBar/>
        <GeminiMovieSuggestion/>
    </div>
  )
}

export default GeminiSearch
