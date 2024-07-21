import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    console.log(movies);
    if(movies.length === 0) return;
    // Find the main movie from the nowPlayingMovies array.
    const mainMovie = movies.find((movie) => (movie.title === "Bad Boys: Ride or Die"))
    const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId = {id} />
    </div>
  )
}

export default MainContainer
