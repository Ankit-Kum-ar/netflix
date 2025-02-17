import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../redux/Slices/movieSlice";

export const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        // console.log(data?.results)
        dispatch(addUpcomingMovies(data?.results));
    }
    useEffect(() => {
        getUpcomingMovies();
    }, [])
}