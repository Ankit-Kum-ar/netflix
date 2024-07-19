import React from 'react'
import {  useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';


const VideoBackground = (props) => {

  useTrailerVideo(props.movieId);
  const trailerData = useSelector((store) => store.movie?.trailerVideo)
  // console.log(trailerData);

  return (
    <div>
      {/* iframe is code from the youtube video share </> dev option */}
      <iframe
        className='md:mt-0 mt-[2%] w-screen aspect-video'
       src={"https://www.youtube.com/embed/ZTQyMmz-cQE?si=" + trailerData?.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&iv_load_policy=3&rel=0"} 
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin">
       </iframe>
    </div>
  )
}

export default VideoBackground
