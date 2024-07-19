import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addTopRatedShows } from "../redux/Slices/movieSlice";

export const useTopRatedShows = () => {
    const dispatch = useDispatch();

    const getTopRatedShows = async() => {
        const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS)
        const data = await response.json()
        dispatch(addTopRatedShows(data?.results))
    }
    useEffect(() => {
        getTopRatedShows()
    }, [])
}