import { useEffect } from "react";
import { API_OPTIONS } from "../Constant";
import { useDispatch } from "react-redux";
import { addSimilarMovies } from "../redux/slice/MovieSlice";

/**
*  A function that fetch given movie id related similar movies from TMDB movie similar API.
*
* @params movieId : A function that receives the movieName, that responsible for giving result movies details.
* @return result : A function return the movie casts.
*/

export const useGetSimilarMovies = (movieId) => {

    const dispatch = useDispatch();

    // Function to fetch TMDB data && set into store
    const getSimilarMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, API_OPTIONS);
        const data = await response.json();
        dispatch(addSimilarMovies(data?.results));
    }
    // Called method after component mount
    useEffect(() => {
        getSimilarMovies();
    }, [movieId]);
}