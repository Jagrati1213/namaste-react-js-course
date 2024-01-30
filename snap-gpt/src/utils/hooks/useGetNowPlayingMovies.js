import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/slice/MovieSlice";

/** 
 * A function that fetch NowPlayingMovies from TMDB API, 
 * and set the fetch data into movie's Redux store.
 * */
export const useGetNowPlayingMovies = () => {

    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const handleGetNowPlayingMovie = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data?.results));
    }

    // Called method after component mount
    useEffect(() => {
        handleGetNowPlayingMovie();
    }, []);
}