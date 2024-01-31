import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingsMovies } from "../redux/slice/MovieSlice";
import { API_OPTIONS } from "../Constant";

/** 
 * A function that fetch upcoming movies from TMDB API, 
 * and set the fetch data into movie's Redux store.
 * */
export const useGetUpComingMovies = () => {
    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const handleGetUpComingMovie = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=2', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpComingsMovies(data?.results));
    }

    // Called method after component mount
    useEffect(() => {
        handleGetUpComingMovie();
    }, []);
}