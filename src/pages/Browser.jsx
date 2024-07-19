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
const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShows();
  usePopularShow();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser
