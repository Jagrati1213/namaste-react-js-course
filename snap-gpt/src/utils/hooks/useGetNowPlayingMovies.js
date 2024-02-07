import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, setLoading } from "../redux/slice/MovieSlice";

/** 
 * A function that fetch NowPlayingMovies from TMDB API, 
 * and set the fetch data into movie's Redux store.
 * */
export const useGetNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const { nowPlayingMovies } = useSelector((store) => store.movies);

    // Function to fetch TMDB data && set into store
    const handleGetNowPlayingMovie = async () => {

        dispatch(setLoading({ dataKey: 'nowPlaying', loadingState: true }));
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data?.results));
        dispatch(setLoading({ dataKey: 'nowPlaying', loadingState: false }));
    }

    // Called method after component mount
    useEffect(() => {
        !nowPlayingMovies && handleGetNowPlayingMovie();
    }, [nowPlayingMovies]);
}