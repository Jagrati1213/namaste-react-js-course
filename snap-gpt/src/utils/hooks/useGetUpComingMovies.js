import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingsMovies, setLoading } from "../redux/slice/MovieSlice";
import { API_OPTIONS } from "../Constant";

/** 
 * A function that fetch upcoming movies from TMDB API, 
 * and set the fetch data into movie's Redux store.
 * */
export const useGetUpComingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);

    // Function to fetch TMDB data && set into store
    const handleGetUpComingMovie = async () => {

        dispatch(setLoading({ dataKey: 'upComing', loadingState: true }));
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=2', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpComingsMovies(data?.results));
        dispatch(setLoading({ dataKey: 'upComing', loadingState: true }));

    }

    // Called method after component mount
    useEffect(() => {
        !upComingMovies && handleGetUpComingMovie();
    }, [upComingMovies]);
}