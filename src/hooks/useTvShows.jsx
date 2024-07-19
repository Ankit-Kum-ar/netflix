import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTvShows } from "../redux/Slices/movieSlice";

export const useTvShows = () => {

    const dispatch = useDispatch();

    const getTvShows = async() => {
        const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const data = await response.json()
        console.log(data?.results)
        dispatch(addTvShows(data?.results));
    }
    useEffect(() => {
        getTvShows();
    }, []);
}