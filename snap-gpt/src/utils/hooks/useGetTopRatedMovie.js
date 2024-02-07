import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, setLoading } from "../redux/slice/MovieSlice";

/** 
 * A function that fetch top rated movies from TMDB API, 
 * and set the fetch data into movie's Redux store.
 * */
export const useGetTopRatedMovie = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    // Function to fetch TMDB data && set into store
    const handleGetTopRatedMovie = async () => {

        dispatch(setLoading({ dataKey: 'topRated', loadingState: true }));
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=4', API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRatedMovies(data?.results));
        dispatch(setLoading({ dataKey: 'topRated', loadingState: true }));

    }

    // Called method after component mount
    useEffect(() => {
        !topRatedMovies && handleGetTopRatedMovie();
    }, [topRatedMovies]);
}