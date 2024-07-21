import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../redux/Slices/movieSlice";

export const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        // Fetching Data from TMB API and update the store
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        // console.log(data?.results)
        // Dispatch the action to set the movies
        dispatch(addTopRatedMovies(data?.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    }, [])
}