import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../redux/Slices/movieSlice";

export const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async() => {
        // Fetching Data from TMB API and update the store
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        console.log(data?.results)
        // Dispatch the action to set the movies
        dispatch(addPopularMovies(data?.results))
    }
    useEffect(() => {
        getPopularMovies();
    }, [])
}