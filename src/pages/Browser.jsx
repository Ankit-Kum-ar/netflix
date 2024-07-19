import React from 'react'
import Header from '../components/Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies';
import { useTvShows } from '../hooks/useTvShows';
import { usePopularShow } from '../hooks/usePopularShows';
import { useTopRatedShows } from '../hooks/useTopRatedShows';
import GptSearch from '../components/GptSearch';
import { useSelector } from 'react-redux';
const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();
  usePopularShow();
  useTopRatedShows();
  const gptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div>
      <Header/>
      {
        gptSearch ? 
          (<GptSearch/>) :
          (
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
          )
      }      
    </div>
  )
}

export default Browser
