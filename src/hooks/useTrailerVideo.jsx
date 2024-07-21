import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/Slices/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    // Firstly fetch the video of mainMovie from TMDB video api.
    // Then set the video as background of this component.
    useEffect(() => {
        getMovieVideo();
    }, [])

    const getMovieVideo = async() => {
        // Here write the logic for fetching the video of mainMovie from TMDB video api.
        const response = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const data = await response.json();
        // console.log(data); 
        
        const trailerType = data.results.filter((video) => video.type="Trailer"); // Filter those objects who have type = trailer
        // console.log(trailerType);
        const trailer = trailerType.length === 0 ? data?.results[0] : trailerType[12]; // Save a single trailer by checking that trailerType array is not empty.
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer));
    }
}

export default useTrailerVideo
