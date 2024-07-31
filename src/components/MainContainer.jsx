import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { description, movieId, title } from '../utils/constant';

const MainContainer = () => {
    // const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    // // console.log(movies);
    // if(movies.length === 0) return;
    // // Find the main movie from the nowPlayingMovies array.
    // console.log(movies);
    // const mainMovie = movies.find((movie) => (movie.title === "Bad Boys: Ride or Die"))
    // console.log(mainMovie);
    // const {original_title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={description}/>
      <VideoBackground movieId = {movieId} />
    </div>
  )
}

export default MainContainer
