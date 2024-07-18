import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/Slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

export const useNowPlayingMovies = () => {
    // Fetching Data from TMB API and update the store by API data.

    // Dispatch an action for movieSlice...
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await response.json(); 
        // console.log(data?.results); // Now Playing Movies
        // Dispatch the action to set the movies...
        dispatch(addNowPlayingMovies(data?.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

}