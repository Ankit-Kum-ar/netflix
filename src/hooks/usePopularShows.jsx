import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addPopularShows } from "../redux/Slices/movieSlice";

export const usePopularShow = () => {

    const dispatch = useDispatch();
    const getPopularShows = async() => {
        const response = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS)
        const data = await response.json()
        // console.log(data?.results)
        // Dispatch the action to set the movies
        dispatch(addPopularShows(data?.results))
    }

    useEffect(() => {
        getPopularShows();
    }, [])
}